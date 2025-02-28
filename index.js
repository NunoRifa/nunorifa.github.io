document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("terminal").addEventListener("click", () => {
    document.getElementById("command-input").focus();
  });

  function printOutputWithDelay(text, delay = 1000, callback = null) {
    let index = 0;
    const outputElement = document.getElementById("output");

    function printNextLetter() {
      if (index < text.length) {
        outputElement.textContent += text[index];
        index++;

        setTimeout(printNextLetter, delay);
      } else {
        if (callback) callback();
      }
    }

    printNextLetter();
  }

  const terminal = document.getElementById("terminal");
  setTimeout(() => {
    terminal.classList.add("visible");
    printOpen();
  }, 500);

  const commandInput = document.getElementById("command-input");
  const output = document.getElementById("output");

  commandInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = commandInput.value.trim();
      commandInput.value = "";
      handleCommand(command.toLowerCase());
    }
  });

  function handleCommand(command) {
    printOutput(
      `<span class="terminal-users mr-2">user@portfolio:~$</span> ${command}`
    );
    switch (command) {
      case "about":
        printOutput(
          "This is the about section. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eveniet molestias aliquam vel, beatae vitae dicta laborum error animi inventore voluptas culpa, fuga tempore sed."
        );
        break;
      case "skills":
        printOutput("These are my skills. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eveniet molestias aliquam vel, beatae vitae dicta laborum error animi inventore voluptas culpa, fuga tempore sed.");
        break;
      case "portfolio":
        printOutput("This is my portfolio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eveniet molestias aliquam vel, beatae vitae dicta laborum error animi inventore voluptas culpa, fuga tempore sed.");
        break;
      case "--help":
        printHelp();
        break;
      case "clear":
        clearTerminal();
        return;
      default:
        printOutput(`Command not found: ${command}`);
    }
    printPrompt();
  }

  function printOutput(text) {
    const newLine = document.createElement("div");
    newLine.innerHTML = text;
    output.appendChild(newLine);
  }

  function printOpen() {
    printOutputWithDelay(
      "Hallo saya Nuno Rigo Fadilah, seorang yang menggemari Web Development ",
      100,
      () => {
        printOutputWithDelay("Available commands:", 50, () => {
          printOutput("about - Show about section");
          printOutput("skills - Show skills section");
          printOutput("portfolio - Show portfolio section");
          printOutput("clear - Clear the terminal");
        });
      }
    );
    // printOutputWithDelay("Available commands:", 100, () => {
    //   printOutput("about - Show about section");
    //   printOutput("skills - Show skills section");
    //   printOutput("portfolio - Show portfolio section");
    //   printOutput("clear - Clear the terminal");
    // });
  }

  function printHelp() {
    printOutput("--help - Show this help message");
    printOutput("Available commands:");
    printOutput("about - Show about section");
    printOutput("skills - Show skills section");
    printOutput("portfolio - Show portfolio section");
    printOutput("clear - Clear the terminal");
  }

  function clearTerminal() {
    output.innerHTML = "";
  }

  function printPrompt() {
    const prompt = document.createElement("div");
    output.appendChild(prompt);
  }

  document.getElementById("trash-icon").addEventListener("click", () => {
    Swal.fire({
      title: "The Internet?",
      text: "Sorry, it cannot be accessed at this time.",
      icon: "question",
    });
  });

  document.getElementById("file-system-icon").addEventListener("click", () => {
    Swal.fire({
      title: "The Internet?",
      text: "Sorry, it cannot be accessed at this time.",
      icon: "question",
    });
  });

  document.getElementById("home-icon").addEventListener("click", () => {
    handleCommand("--help");
  });
});
