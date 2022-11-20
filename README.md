# CoAReader65

# Set up environment on WSL2(Ubuntu-20.04)
*Below commands set up on Ubuntu-20.04, not Docker container.
 So I recommend you to create new WSL2 environment to separete the env you always use one.
 
# OS Setup Commands.
```
cd ~
sudo apt update
sudo apt upgrade
sudo apt install unzip zip nodejs npm
# Check the latest version commandlinetools from https://developer.android.com/studio#command-tools.
wget https://dl.google.com/android/repository/commandlinetools-linux-9123335_latest.zip
unzip commandlinetools-linux-9123335_latest.zip -d Android
rm -rf commandlinetools-linux-9123335_latest.zip
sudo apt install -y lib32z1 openjdk-8-jdk
cd Android
mv cmdline-tools latest
mkdir cmdline-tools
latest cmdline-tools
cd cmdline-tools/latest/bin
# Check latest platform and build-tools versions (30, 30.0.2)
./sdkmanager --install "platform-tools" "platforms;android-30" "build-tools;30.0.2"
./sdkmanager --update
sudo apt install gradle
export ANDROID_HOME="$HOME/Android"
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/tools/bin:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
printf "\n\nexport ANDROID_HOME=\$HOME/Android\nexport PATH=\$PATH:\$ANDROID_HOME/tools\nexport PATH=\$PATH:\$ANDROID_HOME/platform-tools" >> ~/.bashrc
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sudo npm install -g n yarn
sudo n 16.18.1
sudo apt purge -y nodejs npm
sudo apt autoremove
```

# Setup Android device
## Enable Developer Mode
*** On Android device ***
- Tap the Build Number 7 times. (The Build Number is possibly in Setting -> Device Information.)
- Turn on the toggle on Setting -> System -> Developer option -> Wireless debug.
- Tap "Wireless debug", then tap "Pair setting with Pair setting code."
- Show Pair setting code and IP address/Port
*** On WSL ***
```
adb pair XXX.XXX.XXX.XXX/XXXXX # show on the android device popup.
(Enter pairing code: ) YYYYYY # show on the android device popup.
adb connect XXX.XXX.XXX.XXX/ZZZZZ # show on the android devive menu. *Not popup.
```

# App setup commands
```
git clone hogehoge
sudo chmod 755 android/gradlew
yarn react-native start
(Kick up another WSL CLI)
yarn react-native run-android
```
# Debug
If you need Native module log, you have to install Android studio on Windows and use Logcat.