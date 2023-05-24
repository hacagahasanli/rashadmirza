export const preMockBlogData = `
I found this Git Cheat Sheet on my google docs.\n
I'll share it with you without modifying anything.\n
Note: I wrote it approximately 4-5 years ago for myself and it's not a perfect cheat sheet.\n
Terminal
Download http://iterm2.com
$ brew install zsh zsh-completions
$ chsh -s /bin/zsh
$ sh -c '$(curl -fsSL
https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)'\n
Config
$ nano $HOME/.gitconfig (git global config file)
$ cat .git/config (local git file see user name, email etc)
$ git config --global user.name “Rashad M.”
$ git config --global user.email “rashad@rashadmirza.com”
$ git commit --amend --author=”Rashad ” (Change author on last commit)\n
$ git config --list
View the commit info (.git/object/folder_name/1st 2 letter)
$ git cat-file -p f5bd\n
Change remote URL
$ git remote set-url origin https://github.com/rashad404/example.git\n
Push an existing repository from the command line
$ git remote add origin https://github.com/rashad404/example.git
$ git branch -M main
$ git push -u origin main\n
Logs
$ git log\n
View staging area
$ git ls-files -s\n
View changed files in last commit
$ git log --name-status HEAD^..HEAD
List commit changed files\n
$ git diff-tree --no-commit-id --name-only -r 46ad46897371742f2b5c6336f61e9a012d4b6146\n
List last commit changed files
$ git diff-tree --no-commit-id --name-only -r 891fa1ecadba6c2450e012f6645437c559557546
Unstage file\n
$ git rm --cached file2.txt
Download Github desktop
VIM Editor:\n
Press “i” for insert mode and type
Esc to exit from Insert mode.
:wq to save changes and exit
See where HEAD points
$ cat .git/HEAD\n
See where master branch points
$ refs/heads/master\n
See parent
$ git cat-file -p 78e23ccd\n
See tree
$ git cat-file -t 78e23ccd
Deteached HEAD &gt When HEAD points directly to the commit\n
Branch
$ git branch (List)
$ git branch (Create new branch)
$ git checkout (Checkout specific branch)
$ git checkout -b (create and enter)
$ git branch -d (Delete)
$ git branch -D (Force delete)
$ git push origin : (Delete remote branch)
$ git branch -m (Rename)\n
Commit
$ git commit -m 'message'
See changed files
$ git log --name-status HEAD^..HEAD
`