#!/bin/bash

# ==============================================================================
# 🚀 PUSH TO GITHUB SCRIPT (NARGO'S FIRST CLASS VERSION)
# ==============================================================================

# 1. LOAD PROJECT DETAILS FROM .env.push ✏️
# ------------------------------------------------------------------------------
if [ -f .env.push ]; then
    source .env.push
else
    echo "❌ Error: .env.push file not found!"
    echo "Please create a .env.push file with GITHUB_USER and GITHUB_PASSWORD."
    exit 1
fi

GITHUB_REPO_NAME="Nargos_HariCut_Web"
GITHUB_BRANCH_NAME="Nargos_Web_Dev"
COMMIT_DESCRIPTION="Initial Release: Nargo's First Class - Premium Grooming & Non-Surgical Hair Restoration Platform"
# ------------------------------------------------------------------------------

echo "🎯 Preparing to push to GitHub ($GITHUB_REPO_NAME)..."

# 1.5 Initialize Git if missing
if [ ! -d .git ]; then
    echo "🏗️ Initializing new Git repository..."
    git init
    # Set default branch name
    git checkout -b "$GITHUB_BRANCH_NAME" 2>/dev/null
fi

# 2. Handle Branching
# Check if the repository is empty (no commits yet)
if ! git rev-parse --rev-list --count --all > /dev/null 2>&1; then
    echo "🌿 Initializing local branch: $GITHUB_BRANCH_NAME..."
    git checkout -b "$GITHUB_BRANCH_NAME" 2>/dev/null || git branch -m "$GITHUB_BRANCH_NAME"
else
    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
    if [ "$CURRENT_BRANCH" != "$GITHUB_BRANCH_NAME" ]; then
        if ! git show-ref --verify --quiet "refs/heads/$GITHUB_BRANCH_NAME"; then
            echo "🌿 Creating branch: $GITHUB_BRANCH_NAME..."
            git checkout -b "$GITHUB_BRANCH_NAME"
        else
            echo "🌿 Switching to branch: $GITHUB_BRANCH_NAME..."
            git checkout "$GITHUB_BRANCH_NAME"
        fi
    fi
fi

# 3. Check for Changes
echo "🔍 Checking for uncommitted changes..."
if [[ -n $(git status -s) ]]; then
    echo "📦 Staging and committing changes..."
    git add .
    git commit -m "$COMMIT_DESCRIPTION"
else
    echo "✅ No new changes to commit."
fi

# 3.5 Auto-create Repository if missing
echo "🔍 Checking if repository exists on GitHub..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "${GITHUB_USER}:${GITHUB_PASSWORD}" "https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO_NAME}")

if [ "$HTTP_STATUS" -eq 404 ]; then
    echo "🚀 Repository not found. Creating '${GITHUB_REPO_NAME}' on GitHub..."
    CREATE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -u "${GITHUB_USER}:${GITHUB_PASSWORD}" \
        -H "Accept: application/vnd.github.v3+json" \
        https://api.github.com/user/repos \
        -d "{\"name\":\"${GITHUB_REPO_NAME}\", \"private\":false, \"description\":\"${COMMIT_DESCRIPTION}\"}")
    
    if [ "$CREATE_STATUS" -eq 201 ]; then
        echo "✅ Repository created successfully!"
    else
        echo "❌ Failed to create repository (Status: $CREATE_STATUS). Please create it manually."
    fi
else
    echo "✅ Repository found."
fi

# 4. Configure GitHub Remote
ENCODED_PASSWORD=$(echo -n "$GITHUB_PASSWORD" | sed 's/@/%40/g')
GITHUB_URL="https://${GITHUB_USER}:${ENCODED_PASSWORD}@github.com/${GITHUB_USER}/${GITHUB_REPO_NAME}.git"

if ! git remote | grep -q "github"; then
    echo "🔗 Adding GitHub remote..."
    git remote add github "$GITHUB_URL"
else
    git remote set-url github "$GITHUB_URL"
fi

# 4.5 Sync with Target Branch (main) to prevent conflicts
echo "📡 Syncing with remote 'main' branch..."
git fetch github
if git rev-parse --verify github/main >/dev/null 2>&1; then
    # Try to merge main into current branch to allow for smooth MR on server
    git merge github/main --allow-unrelated-histories -m "Sync with main" --no-edit
    if [ $? -ne 0 ]; then
        echo "⚠️  Conflict detected. Auto-resolving (keeping local state)..."
        git checkout --ours .
        git add .
        git commit -m "Auto-resolved conflicts by favoring local Dev state" --no-edit
    fi
fi

# 5. Push to GitHub
echo "🚀 Pushing branch '$GITHUB_BRANCH_NAME' to GitHub..."
# Use --force if histories were disconnected, otherwise regular push
git push -u github "$GITHUB_BRANCH_NAME" --force

echo ""
echo "✅ Done! Your code is now live on GitHub."
echo "🌐 URL: https://github.com/$GITHUB_USER/$GITHUB_REPO_NAME"
echo "=============================================================================="
