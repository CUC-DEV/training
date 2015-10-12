#!/bin/bash
if [ $USER != 'root' ]
then
echo "REQUIRES ROOT"
exit 0
fi
echo It is going to install git-core
sudo apt-get update && sudo apt-get install zsh git-core
echo It is going to install nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
echo It is going to install nodejs
nvm install 4.1.2
echo It is going to install om-my-zsh
sudo sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

echo The install was successful. 