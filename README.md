[![GitHub](https://img.shields.io/badge/GitHub-Crill--IOS--Scripting-181717?logo=github)](https://github.com/Crill-IOS/Crill-IOS-Scripting)
[![Website](https://img.shields.io/badge/Website-crillios.com-1e90ff?logo=google-chrome&logoColor=white)](https://crillios.com)


# <img src="logo_small.png" alt="Crill-IOS Logo" width="48"> Crill-IOS-Scripting · VS Code Extension

**Crill-IOS-Scripting** is a Language Server Protocol based tool that optimizes the cisco IOS scripting expirience. 

---


## Features
- Autocompletion of Cisco IOS commands and syntax   
- Syntax highlighting  
- Live error detection for error free scripts  
- Modular architecture — easy to extend with new commands or templates 

![Syntax Highlighting Example](screenshots/highlighting.png)  
*Syntax highlighting for IOS commands*  

![Autocomplete Example](screenshots/autocomplete.png)  
*Command suggestions & validation in real time*  


## 🛠 How does it work?
1. Install the extension from the **VS Code Marketplace**.  
2. Create a file with the extension `.ios`.  
3. Start typing your Cisco IOS config – Crill-IOS suggests valid commands, highlights errors, and provides hints.  
4. Validation runs in real-time via the built-in LSP engine.  

```bash
! Example
interface GigabitEthernet0/1
 description Uplink to Core
 ip address 192.168.0.1 255.255.255.0
 no shutdown
```

![Live Validation Example](screenshots/validation.png)  
*Errors and warnings are highlighted instantly*  

---

## 🚀 Installation
Download the VS Code Extension **Crill-IOS-Scripting**.  

[Download via Marketplace](LINK-HERE)  
or
(binaries comming soon!)
---

## 🗺 What’s planned next?
- More advanced diagnostics with context awareness  
- Command reference tooltips with docs  
- More Commands!

---

## 📌 Other Notes
- Built with [Langium](https://github.com/langium/langium) (MIT).  
- See [NOTICE](NOTICE) for details on third-party licenses.  
- Licensed under [MIT](LICENSE).  
- Contributions welcome.  

---


<p align="center">
  Made with ❤️ for network engineers · Crill-IOS
</p>
