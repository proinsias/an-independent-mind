# 5 Modern Bash Scripting Techniques That Only a Few Programmers Know

![rw-book-cover](https://archive.ph/9SoHF/697434cf008d5be72596541634174ebf7bdb81cf/scr.png)

## Metadata
- Author: [[archive.ph]]
- Full Title: 5 Modern Bash Scripting Techniques That Only a Few Programmers Know
- Category: #articles
- URL: https://archive.ph/9SoHF

## Highlights
- Look at the following simple animation that only has two animation frames:
  while true; 
  do 
  # Frame #1 
  printf "\r< Loading..." 
  sleep 0.5 
  # Frame #2 
  printf "\r> Loading..." 
  sleep 0.5 
  done
  The above Bash script shows an endless two-frame animation on the terminal. The `printf` statement uses the `\r` escape character to reset the terminal cursor of the current line. ([View Highlight](https://read.readwise.io/read/01h384g1mn0qhc38b6rwfr4rvb))
- We can add more frames to the animation and display it until a specific time-consuming task completes with the following Bash script.
  while kill -0 $pid 2&>1 > /dev/null; 
  do 
  for frame in $frames; 
  do 
  printf "\r$frame Loading..." 
  sleep 0.5 
  done 
  done 
  printf "\n" ([View Highlight](https://read.readwise.io/read/01h384gae37k8p2b3r4rzc68e0))
- you can use the `notify-send` command on GNU/Linux-based operating systems, as shown below.
  sleep 10 
  notify-send "notify.sh" "Task #1 was completed successfully" ([View Highlight](https://read.readwise.io/read/01h38d4v18wh305e68kbdbev33))
    - Note: macOS users can execute the AppleScript interpreter from Bash to display native notifications as follows:
      #!/bin/bash
      sleep 10
      osascript -e "display notification \"Task #1 was completed successfully\" with title \"notify.sh\""
- function task1() { 
  echo "Running task1..." 
  sleep 5 
  }function task2() { 
  echo "Running task2..." 
  sleep 5 
  } ([View Highlight](https://read.readwise.io/read/01h38e2p4z188zmy9rwxs14q84))
    - Note: #!/bin/bash
      function task1() {
      echo "Running task1..."
      sleep 5
      }
      function task2() {
      echo "Running task2..."
      sleep 5
      }
      task1 &
      task2 &
      wait
      echo "All done!"
- we run two parallel functions as background jobs: `task1` and `task2`. Besides, we use the `wait` builtin to keep the script instance active until background jobs complete their execution. ([View Highlight](https://read.readwise.io/read/01h38e45bja8qk06es41r5ceq8))
- The `zenity` program offers several commands to display various GUI elements from the GNU/Linux command-line environments. For example, we can open a file selection dialog with the following command.
  zenity --file-selection ([View Highlight](https://read.readwise.io/read/01h38t9zsdjzwqts3vtr9bz0w8))
- macOS users can call the AppleScript interpreter as usual. For example, they can display a file selection dialog via Bash scripts with the following command.
  osascript -e "POSIX path of (choose file)" ([View Highlight](https://read.readwise.io/read/01h38ta8x5t4mv4v3zr217vm8n))
- The `tput` Unix program offers commands to control the current terminal screen. It provides commands to change the terminal cursor position, retrieve terminal information, and change text styles. We can invoke the `tput` command with the `echo` command to print various text styles on all Unix-like and Unix-based operating systems.
  bold=$(tput bold) 
  underline=$(tput smul) 
  italic=$(tput sitm) 
  info=$(tput setaf 2) 
  error=$(tput setaf 160) 
  warn=$(tput setaf 214) 
  reset=$(tput sgr0)echo "${info}INFO${reset}: This is an ${bold}info${reset} message" 
  echo "${error}ERROR${reset}: This is an ${underline}error${reset} message" 
  echo "${warn}WARN${reset}: This is a ${italic}warning${reset} message" ([View Highlight](https://read.readwise.io/read/01h38tcnd78c592pdt9zps0jdf))
