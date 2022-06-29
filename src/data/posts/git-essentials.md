---
title: 'Inversion of Control Container'
date: '2022-06-26'
summary: 'Inversion of control with Spring'
slug: 'inversion-of-control-container'
image: '_next/image?url=%2Fimg%2Fweb-header.jpg&w=3840&q=75'
---

##### Git Essentials
Git is a version of version control or **Version Control System** (VCS). Version control is a system that records changes to a file
or set of files over time so that users of the files can recall specific versions later. Version Control Systems
allow us to revert files to a previous state, revert the whole project to a previous state, compare changes over time,
and see who last modified files to cause problems. Using a VCS means that we can easily recover from most problems introduced
to our code base.

Version Control Systems also allow us to collaborate as developers on other computers with a shared project.
**Centralised Version Control Systems** in the past allowed centralised control over who can do what. The downside with a
**CVCS** does mean that there is a single point of failure on a single server. If the server goes down noone can add changes
to the cnetralised database. Also if the hard disk of the central database becomes corrupted all work can be lost.

The latest **VCS**, of which **Git** is a part, is **Distributed Version Control Systems**. In a **DVCS** clients don't
just pull latest changes from a centralised server, they also have their own version of the system on their computers.

![DVCS](https://user-images.githubusercontent.com/27693622/176469004-3770ac30-4fa2-40d1-ab62-53c7443fbfd3.png)

This distributed system also allows teams to organise themselves in different ways simultanesously within the same project.

##### So what is Git?

Most **VCS** systems store information as a list of file based changes. These systems think of the information they store
as a set of files and the changes made to each file over time.

![File based changes](https://user-images.githubusercontent.com/27693622/176469894-cb45b468-f042-4c85-80f7-48ddecd26b24.png)

Git thinks considers the data it stores as a series of snapshots of a miniature filesystem. Each time we commit or save
our projects in Git, Git takes a picture of what the files look liek at that moment and stores a reference to that snapshot.
If the files have not changed, then Git doesn't store the file again, it only stores a link to the previous identical file
it has already stored. Git, therefore, thinks of its data as a stream of snapshots.

![Git snapshots](https://user-images.githubusercontent.com/27693622/176470561-1cc644b3-96e0-4b4a-8a09-d1a1650daa21.png)

Every new storage in Git is check-summed and then referred to by that checksum. The mechanism Git uses for checksumming
is SHA-1 hash. This is a 40 character string with hexadecimal characters and calculated based on the contents of a file
or directory. Git stores everything in its database through the hash value of its contents.

Locally, there are three main states that your files can occupy: committed, modified and staged.
*Modified* means that you have changed the file but have not committed it to your database yet.
*Staged* means that you have marked a modified file in its current version to go into the next commit to
your local database. *Committed* means that the data is safely stored in your local database on your machine.
These three states are represented by the *Working Directory*, *Staging Area* and local *Repository* respectively:
![Modified staged and committed](https://user-images.githubusercontent.com/27693622/176472008-048a3790-7b01-429e-9688-c2b1b7f3bc87.png)

The Git directory is where Git stores the metadata and object database for your project. It is what is copied when you
clone a repository from another computer. The working directory is a single checkout of a single version of the project.
The files are pulled out of the compressed database in the Git directory and placed on disk for us to use and change.

The staging area is a file, contained in the Git directory, that sotres information about what will go into our next commit.
You may recognise the following Git workflow:
1. Change files in your working directory
2. Stage the files, adding snapshots of the files changed to the staging area.
3. You commit the files and store the snapshot to your Git directory.

If a version of a file is in the Git directory, it has been committed. If it is modified and added to the staging area,
it has been staged. If it has been changed but neither added to the staging area, nor committed it is modified.

You can check your git version with the following command:
```bash
git --version
```
You can also check your config with:
```bash
git config --list
```
The command ```git help``` give us a handy list possible git commands:
```bash
These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects
```
If we need help with **git** we can use the following commands:
```bash
git help <verb>
git <verb> --help
man git-<verb>
```

##### Basic commands
In this section we will learn about the everyday tools you might have to use with git. We will learn how to
configure and initialize a repository, begin and stop tracking files, and stage and commit changes. We will also learn
how to tell Git to ignore certain files, undo mistakes quickly, browse the history of your project, changes between commits
and how to push and pull from remote repositories.

##### Initializing / Cloning a repository
There are two ways to create a Git project. First you can take an existing project or directory on your
computer and import it into Git. Second, you can clone an existing Git repository from another server.

##### Initializing a repository
In order to track an existing directory or project you should navigate to the directory and then run:
```bash
git init
```
This creates a new subdirectory named .git that contains all the necessary repository files. At this point, we haven't added
anything to be tracked. In order to track files in your directory you should run ```git add``` and then
```git commit```:
```bash
git add README.md
git commit -m "Initial commit"
```

##### Cloning a repository
If you wanted to know how git worked and knew C then you might want to clone the git open source repository:
```bash
git clone https://github.com/git/git
```
This would create a directory named git on your computer, initialize a .git directory inside it and pull down all
the data for that repository and checkout a working copy of the latest version of git. There are two ways to clone projects.
In our example we used ```https://``` but it is also possible to use the SSH transfer protocol through
```git://``` or ```user@server:path/to/repo.git```. We can look at this in a later article.

##### Recording changes
Now we have a working git repository, we can make changes and commit snapshots of these changes to our repository each time
we want to record our work in the project. Each file can be one of two states: tracked or untracked.
Tracked files were in an earlier snapshot and can be unmodified, modified or staged. Untracked files are all the other files
in our working directory that were not in our last snapshot and are not in our staging area. When we first clone
a repository, all our files will be tracked and unmodified because we just checked them out and haven't edited anything.
Our files, therefore, have a lifecycle:

![File lifecycle](https://user-images.githubusercontent.com/27693622/176479527-4bd68759-5741-4d88-b588-45ecf523ada2.png)

When we first add a new file, it is untracked. If we add the file to git it is staged. Unmodified files need to changed 
before they can be staged and we can commit files which then moves them to the unmodified state and also remove them from
git which then leaves them as untracked. We can check the current state of our file directory with the following command:
```bash
git status
```
This shows that I have added a file but also shows that there are changes in the file that I have not staged:
```bash
❯ git status                                                                                                                                        git-practice NextJS-Blog
On branch git-practice
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   src/data/posts/git-essentials.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/data/posts/git-essentials.md

```
In order to stage my changes I will need to run ```git add src/data/posts/git-essentials.md```
We can also use ```git diff``` to show the difference between what is in your working directory and your staging area.
It tells you about the changes you have made which you haven't yet staged. To see what you have staged after ```git add```
you can also run ```git diff --staged``` which compares our staged changes to our last commit.

