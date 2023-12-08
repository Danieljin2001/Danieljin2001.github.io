class Card {
    constructor(image, level, type, info){
        this.type = type;
        this.frontImage = image;
        this.level = level;
        this.info = info;
    }
    getInfo(){ 
        let s = this.type;
        return "<p><b>Type:</b> " + s[0].toUpperCase() + s.slice(1) + "</p>" +"<p><b>Level:</b> " + this.level + "</p>" + "<p><b>Info:</b></p><p>" + this.info + "</p>";
    }

}

AttackCards = [];
DefenseCards = [];

AttackCards.push(new Card("../card-image/1-a-nuke.jpg", 1, "Attack", "Wins against all (master cyber-defender)"));
AttackCards.push(new Card("../card-image/1-a-nuke.jpg", 1, "Attack", "Wins against all (master cyber-defender)"));
AttackCards.push(new Card("../card-image/2-a-firewallbypass.jpg", 2, "Attack", "Allows attackers to gain unauthorized access to a network, potentially leading to a compromised system."));
AttackCards.push(new Card("../card-image/2-a-firewallbypass.jpg", 2, "Attack", "Allows attackers to gain unauthorized access to a network, potentially leading to a compromised system."));
AttackCards.push(new Card("../card-image/3-a-basicmalware.jpg", 3, "Attack", "Deployment of malicious software (malware) on a target system. Eg. Creeper Virus"));
AttackCards.push(new Card("../card-image/3-a-basicmalware.jpg", 3, "Attack", "Deployment of malicious software (malware) on a target system. Eg. Creeper Virus"));
AttackCards.push(new Card("../card-image/4-a-behaviour.jpg", 4, "Attack", "Techniques employed by malicious actors to evade detection by security systems that rely on analyzing and identifying patterns of behavior."));
AttackCards.push(new Card("../card-image/4-a-fileless.jpg", 4, "Attack", "Fileless malware is a type of malicious software that operates in a system's memory, leaving little to no trace on the file system. In a fileless malware attack, the malicious code typically resides in the system's RAM (Random Access Memory) rather than being stored as files on the disk. "));
AttackCards.push(new Card("../card-image/5-a-social.jpg", 5, "Attack", "A technique employed by cyber attackers to manipulate individuals into divulging confidential information"));
AttackCards.push(new Card("../card-image/5-a-spoofing.png", 5, "Attack", "Caller ID spoofing is a technique used in social engineering attacks where the attacker manipulates the information displayed on the recipient's caller ID to deceive them about the origin of a phone call. This manipulation often involves making the call appear as if it is coming from a trusted or familiar source"));
AttackCards.push(new Card("../card-image/6-a-exploit.jpg", 6, "Attack", "A type of man-in-the-middle attack where an attacker downgrades a secure HTTPS connection to an unencrypted HTTP connection, making it easier to intercept and manipulate the traffic."));
AttackCards.push(new Card("../card-image/6-a-insecure.jpg", 6, "Attack", "Type of cyber attack where an attacker downgrades a secure HTTPS (Hypertext Transfer Protocol Secure) connection to an insecure HTTP (Hypertext Transfer Protocol) connection. This attack takes advantage of users accessing a website over an unencrypted connection when they believe they are using a secure, encrypted connection."));
AttackCards.push(new Card("../card-image/7-a-brute.jpg", 7, "Attack", "A cryptographic decryption attack in which an attacker systematically tries all possible combinations of keys until the correct one is found, allowing them to decrypt encrypted data. "));
AttackCards.push(new Card("../card-image/7-a-key.jpg", 7, "Attack", "Cryptographic decryption attacks aim to compromise the security of encrypted data by attempting to reveal the original plaintext without knowledge of the encryption key. "));
AttackCards.push(new Card("../card-image/8-a-butter.jpg", 8, "Attack", "Vulnerability that occurs when a program or process attempts to store more data in a buffer than it was allocated to hold. This overflow of data can lead to exploitation which is used to inject and execute malicious code."));
AttackCards.push(new Card("../card-image/8-a-code.jpg", 8, "Attack", "Type of cyber attack where an attacker injects malicious code into a computer program or software application with the intent of altering the program's behavior. Code injection attacks often target vulnerabilities in web applications, allowing attackers to execute arbitrary code on the server or manipulate the behavior of the application."));
AttackCards.push(new Card("../card-image/9-a-active.jpg", 9, "Attack", "Cyber attack in which an attacker actively probes and interacts with a target network to gather information about its infrastructure, devices, and vulnerabilities."));
AttackCards.push(new Card("../card-image/9-a-passive.jpg", 9, "Attack", "Type of cyber attack where an attacker collects information about a target's network without directly interacting with the target systems. Unlike active reconnaissance, which involves sending probes or queries to the target, passive reconnaissance focuses on gathering information passively, often without the target's knowledge."));
AttackCards.push(new Card("../card-image/10-a-exploit.jpg", 10, "Attack", "Exploitation attack involves taking advantage of vulnerabilities, weaknesses, or misconfigurations in a target's network infrastructure or systems to gain unauthorized access, execute malicious code, or perform other malicious activities."));
AttackCards.push(new Card("../card-image/10-a-zero.jpg", 10, "Attack", "Zero-day exploits targets software vulnerabilities that are unknown to the vendor or software developer. Zero-day vulnerabilities are flaws or weaknesses in software applications or systems that are not yet publicly known and, as a result, have not been patched or fixed by the software vendor. "));
AttackCards.push(new Card("../card-image/11-a-smsphishing.jpg", 11, "Attack", "Type of cyberattack in which attackers use text messages (SMS) to trick individuals into divulging sensitive information or taking malicious actions. "));
AttackCards.push(new Card("../card-image/11-a-spearphishing.jpg", 11, "Attack", "Targeted form of phishing that is highly tailored to a specific individual, organization, or group. In spear phishing, attackers gather information about their targets to create more convincing and personalized messages, increasing the likelihood of success."));
AttackCards.push(new Card("../card-image/12-a-keylogging.jpg", 12, "Attack", "A keylogging cyber attack involves the use of malware to secretly record the keystrokes made by a user on a computer or mobile device. "));
AttackCards.push(new Card("../card-image/12-a-ransomware.jpg", 12, "Attack", "Type of cyber attack where attackers deploy malware that encrypts a victim's files or entire system, rendering it inaccessible."));
AttackCards.push(new Card("../card-image/13-a-ddos.jpg", 13, "Attack", "Cyber attack where multiple compromised computers are used to flood a target with a high volume of traffic, overwhelming its resources and rendering it inaccessible to legitimate users"));
AttackCards.push(new Card("../card-image/13-a-webddos.jpg", 13, "Attack", "In a web-based DDoS attack, the goal is to saturate the target's network or web servers with traffic, making it challenging for the website to respond to legitimate user requests. "));

DefenseCards.push(new Card("../card-image/1-d-nuke.jpg", 1, "Defense", "Wins against all (master cyber-hacker)"));
DefenseCards.push(new Card("../card-image/1-d-nuke.jpg", 1, "Defense", "Wins against all (master cyber-hacker)"));
DefenseCards.push(new Card("../card-image/2-d-firewallfort.jpg", 2, "Defense", "Firewall fortification with private, secure IP addresses involves the implementation of robust network security measures. This includes the deployment of firewalls configured to control and monitor traffic between internal and external networks, the use of private IP addressing to obscure internal device identities, and the establishment of secure communication channels such as Virtual Private Networks (VPNs) to safeguard data transmission."));
DefenseCards.push(new Card("../card-image/2-d-firewallsoft.jpg", 2, "Defense", "Firewall software like McAfee acts as a barrier between networks, controlling incoming and outgoing traffic. It monitors and blocks unauthorized access, preventing cyber threats. With customizable rules and threat intelligence, it fortifies network security, shielding against malware, intrusions, and other potential risks, enhancing overall cybersecurity posture."));
DefenseCards.push(new Card("../card-image/3-d-antivirussoftware.jpg", 3, "Defense", "Antivirus software safeguards systems by detecting, blocking, and removing malware. It scans files, emails, and web traffic, identifying malicious programs. With regular updates and heuristic analysis, it provides proactive defense, preventing infections, and maintaining the integrity and security of devices and networks against diverse cyber threats."));
DefenseCards.push(new Card("../card-image/3-d-antivirusshield.jpg", 3, "Defense", "Antivirus software plays a crucial role in cybersecurity by providing a shield against various forms of malicious software, including viruses, malware, ransomware, and other cyber threats. Antivirus programs typically employ a combination of signature-based detection, heuristics, and behavior analysis to identify and neutralize or quarantine malicious files or activities on a computer or network."));
DefenseCards.push(new Card("../card-image/4-d-encryptedcode.jpg", 4, "Defense", "An Intrusion Detection System (IDS) is a cybersecurity tool designed to monitor network or system activities for signs of malicious activities or security incidents. These systems analyze patterns, behaviors, and signatures to detect anomalies indicative of malicious activities, providing real-time alerts or automated responses. IDS play a crucial role in enhancing overall cybersecurity posture by identifying and mitigating security incidents before they escalate."));
DefenseCards.push(new Card("../card-image/4-d-intrusive.jpg", 4, "Defense", "Intrusion detection involves continuous monitoring of an OS for suspicious activities. It uses tools and protocols to identify potential breaches, unusual behaviors, or unauthorized access. This proactive approach enables real-time threat detection, facilitating swift responses to potential security incidents, bolstering system protection, and mitigating risks of cyber intrusions."));
DefenseCards.push(new Card("../card-image/5-d-training.jpg", 5, "Defense", "Training and awareness programs educate users on cybersecurity best practices. They cover threat awareness, safe online behavior, and incident reporting. By empowering individuals, these initiatives reduce human error, enhance vigilance, and foster a security-conscious culture, strengthening the overall resilience of an organization against cyber threats."));
DefenseCards.push(new Card("../card-image/5-d-training.jpg", 5, "Defense", "Training and awareness programs educate users on cybersecurity best practices. They cover threat awareness, safe online behavior, and incident reporting. By empowering individuals, these initiatives reduce human error, enhance vigilance, and foster a security-conscious culture, strengthening the overall resilience of an organization against cyber threats."));
DefenseCards.push(new Card("../card-image/6-d-http.jpg", 6, "Defense", "HTTP Strict Transport Security (HSTS) enforces secure connections by instructing browsers to only communicate via HTTPS. It prevents downgrade attacks, ensuring all interactions are encrypted. By mandating secure communication, HSTS enhances website security, reducing the risk of data interception or tampering during transit."));
DefenseCards.push(new Card("../card-image/6-d-secure.jpg", 6, "Defense", "Employing secure wifi lines would mean strong encryption, authentication systems in place on the network.Using strong encryption protocols such as WPA3 (Wi-Fi Protected Access 3) to encrypt the traffic between Wi-Fi devices and the router. This prevents unauthorized users from eavesdropping on the data being transmitted over the Wi-Fi network. This prevents unauthorized individuals from gaining access to the network."));
DefenseCards.push(new Card("../card-image/7-d-algorithm.jpg", 7, "Defense","Encryption protocols are fundamental components of cybersecurity that provide a secure way to protect sensitive data during transmission or storage. An effective and up-to-date encryption protocol ensures that information remains confidential and secure from unauthorized access or tampering. "));
DefenseCards.push(new Card("../card-image/7-d-strongkey.jpg", 7, "Defense", "Encryption protocols with strong key protection mechanisms ensure the secure transmission and storage of sensitive information by employing robust cryptographic algorithms. These protocols safeguard data by generating and managing encryption keys in a way that makes it extremely challenging for unauthorized parties to decipher the encrypted content without proper authentication."));
DefenseCards.push(new Card("../card-image/8-d-audits.jpg", 8, "Defense", "Code patches, commonly known as software patches or updates, play a crucial role in cybersecurity by addressing vulnerabilities, bugs, and security flaws in software applications. These patches are applied through a combination of code audits and constant server updates, forming an essential part of a proactive cybersecurity defense strategy. "));
DefenseCards.push(new Card("../card-image/8-d-patches.jpg", 8, "Defense", "Code patches involve applying rigorous security practices during software development. This includes secure coding standards, vulnerability scanning, and regular updates. By proactively identifying and fixing vulnerabilities in code, patches bolster software defenses, minimizing the potential for exploits and ensuring robust cybersecurity measures within applications."));
DefenseCards.push(new Card("../card-image/9-d-awareness.jpg", 9, "Defense", "Network segmentation is a security practice that involves dividing a computer network into smaller, isolated segments or subnetworks. The goal is to enhance security by restricting the lateral movement of threats within the network and limiting the impact of a security breach."));
DefenseCards.push(new Card("../card-image/9-d-updates.jpg", 9, "Defense", "Network segmentation partitions networks into smaller segments, limiting access between them. Constantly updating networks involves patching software, firmware, and configurations to fix vulnerabilities. This proactive approach strengthens security by minimizing attack surfaces and ensures systems stay resilient against evolving cyber threats through regular updates and segmentation reinforcement."));
DefenseCards.push(new Card("../card-image/10-d-existing.jpg", 10, "Defense", "Penetration testing, often referred to as ethical hacking, is a proactive cybersecurity practice that involves simulating real-world cyberattacks to identify and address existing weaknesses in an organization's systems, networks, or applications. The primary goal of penetration testing is to assess the security posture of an environment, uncover vulnerabilities, and provide actionable recommendations for improvement. "));
DefenseCards.push(new Card("../card-image/10-d-potential.jpg", 10, "Defense", "Penetration testing simulates cyberattacks to uncover system vulnerabilities. It involves identifying weaknesses in networks, applications, or devices. By mimicking real threats, it pinpoints potential future entry points for attackers. Addressing these weaknesses proactively fortifies cybersecurity measures, preemptively securing systems against evolving threats."));
DefenseCards.push(new Card("../card-image/11-d-ices.jpg", 11, "Defense", "Involves the use of a comprehensive set of security measures and tools to protect email communication in cloud-based environments. Cloud email services, such as those provided by platforms like Microsoft 365 or Google Workspace, are popular targets for cyber threats, including phishing attacks, malware distribution, and business email compromise (BEC) schemes."));
DefenseCards.push(new Card("../card-image/11-d-mfa.jpg", 11, "Defense", "MFA enhances security by requiring multiple forms of verification to access an account. It combines factors like passwords, biometrics, tokens, or SMS codes. This layered approach fortifies authentication, significantly reducing the risk of unauthorized access, even if one factor gets compromised."));
DefenseCards.push(new Card("../card-image/12-d-malware.jpg", 12, "Defense", "User training to educate on safe online practices, mitigating human error. Software solutions like antivirus and anti-malware programs detect and remove malicious software. User training enhances awareness, while software acts as a proactive shield, collectively bolstering defense against diverse malware threats across digital environments."));
DefenseCards.push(new Card("../card-image/12-d-virus.jpg", 12, "Defense", "Network firewalls act as a barrier between trusted internal networks and untrusted external networks, such as the internet. They monitor and control incoming and outgoing traffic based on predefined security rules. Password systems are fundamental to access control and authentication. They require users to provide a combination of usernames and passwords to verify their identity before granting access to systems, networks, or applications."));
DefenseCards.push(new Card("../card-image/13-d-ddos.jpg", 13, "Defense", "Offers robust security for web applications. It shields against cyber threats through web application firewalls, DDoS protection, and security testing. These features safeguard against vulnerabilities, ensuring web app resilience and uninterrupted service for Department of Defense systems."));
DefenseCards.push(new Card("../card-image/13-d-webfirewall.jpg", 13, "Defense", "A security solution designed to protect web applications from various cyber threats, including common web-based attacks. It acts as an additional layer of defense by monitoring, filtering, and blocking HTTP traffic between a web application and the internet."));


for (let i = 0; i < AttackCards.length; i ++){
    var topdiv = document.createElement("div");
    topdiv.setAttribute("class", "d-flex justify-content-center gap-2");

    var elem = document.createElement("img");
    elem.setAttribute("src", AttackCards[i].frontImage);
    elem.setAttribute("id", "cards");
    topdiv.appendChild(elem);
    
    
    var e = document.createElement("div");
    e.setAttribute("id", "attack-card-outer");
    
    elem = document.createElement("div");
    elem.setAttribute("id", "attack-card-info");
    elem.innerHTML = AttackCards[i].getInfo();
    
    
    e.appendChild(elem);
    topdiv.appendChild(e);

    document.getElementById("attack-div").appendChild(topdiv);
    
}


for (let i = 0; i < DefenseCards.length; i ++){
    var topdiv = document.createElement("div");
    topdiv.setAttribute("class", "d-flex justify-content-center gap-2");

    var elem = document.createElement("img");
    elem.setAttribute("src", DefenseCards[i].frontImage);
    elem.setAttribute("id", "cards");
    topdiv.appendChild(elem);
    
    
    var e = document.createElement("div");
    e.setAttribute("id", "defense-card-outer");
    
    elem = document.createElement("div");
    elem.setAttribute("id", "defense-card-info");
    elem.innerHTML = DefenseCards[i].getInfo();
    
    
    e.appendChild(elem);
    topdiv.appendChild(e);

    document.getElementById("defense-div").appendChild(topdiv);


}






