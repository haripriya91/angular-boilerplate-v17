#!/bin/bash

# Function to install NVM (Node Version Manager)
install_nvm() {
  echo "Installing NVM..."
  
  # Download and install NVM
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

  # Load NVM into the current shell session
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  
  echo "NVM installed successfully!"
}

# Function to install Node.js using NVM
install_node() {
  local node_version=$1
  
  if [ -z "$node_version" ]; then
    echo "No Node.js version specified, installing the latest version..."
    nvm install node
  else
    echo "Installing Node.js version $node_version..."
    nvm install $node_version
  fi

  # Set default Node.js version
  nvm alias default node

  echo "Node.js installed successfully!"
  echo "Node version: $(node -v)"
  echo "NPM version: $(npm -v)"
}

# Function to check if Node.js is already installed
check_node_installed() {
  if command -v node &> /dev/null; then
    echo "Node.js is already installed. Version: $(node -v)"
    return 1  # Indicate that Node.js is already installed
  else
    return 0  # Indicate that Node.js is not installed
  fi
}

# Main script execution
main() {
  # Check if Node.js is installed
  if check_node_installed; then
    # Install NVM
    install_nvm

    # Install Node.js (pass the version as the first argument, or install the latest if none is provided)
    install_node $1
  else
    echo "Skipping Node.js installation via NVM as it is already installed."
  fi

  npm install -g @angular/cli
  npm install
  ng serve

}

# Run the main function
main $1
