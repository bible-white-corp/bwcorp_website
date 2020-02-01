echo "DP=$(xrandr | grep ' connected' | cut -d' ' -f1)" >> ~/.bashrc 

echo 'loyck () { i3lock && while true; do xrandr --output "$DP" --rotate inverted; sleep 0.4; xrandr --output "$DP" --rotate normal; sleep 0.4; done  } & ' >> ~/.bashrc

echo 'alias lock="loyck"' >> ~/.bashrc
echo 'alias i3lock="loyck"' >> ~/.bashrc
echo 'alias lck="loyck"' >> ~/.bashrc
echo 'alias l="loyck"' >> ~/.bashrc

