#!/bin/bash
if [ $USER == 'root' ]
then
echo "NOT REQUIRES ROOT"
exit 0
fi
echo It is going to install git-core
sudo apt-get update && sudo apt-get install zsh git-core
echo It is going to install om-my-zsh
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
echo It is going to install nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
echo The install was successful. 
