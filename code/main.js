let PLAYERS;
let INTERVAL;
let PLAYER_PLAYING_INDEX;
let PLAYER_WON;

const Type = {
    Defense: "defense",
    Attack: "attack"
}



class Card {
    constructor(image, level, type, info){
        this.type = type;
        this.frontImage = image;
        this.backImage;
        this.level = level;
        this.info = info;
        if(type == Type.Attack){
            this.backImage = "../card-image/red_back.png";
        } else {
            this.backImage = "../card-image/blue_back.png";
        }
    }

    getLevel(){
        return this.level;
    }

    getInfo(){ 
        let s = this.type;
        return "<p><b>Type:</b> " + s[0].toUpperCase() + s.slice(1) + "</p>" +"<p><b>Level:</b> " + this.level + "</p>" + "<p><b>Info:</b></p><p>" + this.info + "</p>";
    }
    
    
}

class Deck {
    constructor(type){
        this.type = type;
        this.cards = [];
        this.setupDeck();
    }
    setupDeck() {

        if(this.type == Type.Attack){
            this.cards.push(new Card("../card-image/1-a-nuke.jpg", 1, this.type, "Wins against all (master cyber-defender)"));
            this.cards.push(new Card("../card-image/1-a-nuke.jpg", 1, this.type, "Wins against all (master cyber-defender)"));
            this.cards.push(new Card("../card-image/2-a-firewallbypass.jpg", 2, this.type, "Allows attackers to gain unauthorized access to a network, potentially leading to a compromised system."));
            this.cards.push(new Card("../card-image/2-a-firewallbypass.jpg", 2, this.type, "Allows attackers to gain unauthorized access to a network, potentially leading to a compromised system."));
            this.cards.push(new Card("../card-image/3-a-basicmalware.jpg", 3, this.type, "Deployment of malicious software (malware) on a target system. Eg. Creeper Virus"));
            this.cards.push(new Card("../card-image/3-a-basicmalware.jpg", 3, this.type, "Deployment of malicious software (malware) on a target system. Eg. Creeper Virus"));
            this.cards.push(new Card("../card-image/4-a-behaviour.jpg", 4, this.type, "Techniques employed by malicious actors to evade detection by security systems that rely on analyzing and identifying patterns of behavior."));
            this.cards.push(new Card("../card-image/4-a-fileless.jpg", 4, this.type, "Fileless malware is a type of malicious software that operates in a system's memory, leaving little to no trace on the file system. In a fileless malware attack, the malicious code typically resides in the system's RAM (Random Access Memory) rather than being stored as files on the disk. "));
            this.cards.push(new Card("../card-image/5-a-social.jpg", 5, this.type, "A technique employed by cyber attackers to manipulate individuals into divulging confidential information"));
            this.cards.push(new Card("../card-image/5-a-spoofing.png", 5, this.type, "Caller ID spoofing is a technique used in social engineering attacks where the attacker manipulates the information displayed on the recipient's caller ID to deceive them about the origin of a phone call. This manipulation often involves making the call appear as if it is coming from a trusted or familiar source"));
            this.cards.push(new Card("../card-image/6-a-exploit.jpg", 6, this.type, "A type of man-in-the-middle attack where an attacker downgrades a secure HTTPS connection to an unencrypted HTTP connection, making it easier to intercept and manipulate the traffic."));
            this.cards.push(new Card("../card-image/6-a-insecure.jpg", 6, this.type, "Type of cyber attack where an attacker downgrades a secure HTTPS (Hypertext Transfer Protocol Secure) connection to an insecure HTTP (Hypertext Transfer Protocol) connection. This attack takes advantage of users accessing a website over an unencrypted connection when they believe they are using a secure, encrypted connection."));
            this.cards.push(new Card("../card-image/7-a-brute.jpg", 7, this.type, "A cryptographic decryption attack in which an attacker systematically tries all possible combinations of keys until the correct one is found, allowing them to decrypt encrypted data. "));
            this.cards.push(new Card("../card-image/7-a-key.jpg", 7, this.type, "Cryptographic decryption attacks aim to compromise the security of encrypted data by attempting to reveal the original plaintext without knowledge of the encryption key. "));
            this.cards.push(new Card("../card-image/8-a-butter.jpg", 8, this.type, "Vulnerability that occurs when a program or process attempts to store more data in a buffer than it was allocated to hold. This overflow of data can lead to exploitation which is used to inject and execute malicious code."));
            this.cards.push(new Card("../card-image/8-a-code.jpg", 8, this.type, "Type of cyber attack where an attacker injects malicious code into a computer program or software application with the intent of altering the program's behavior. Code injection attacks often target vulnerabilities in web applications, allowing attackers to execute arbitrary code on the server or manipulate the behavior of the application."));
            this.cards.push(new Card("../card-image/9-a-active.jpg", 9, this.type, "Cyber attack in which an attacker actively probes and interacts with a target network to gather information about its infrastructure, devices, and vulnerabilities."));
            this.cards.push(new Card("../card-image/9-a-passive.jpg", 9, this.type, "Type of cyber attack where an attacker collects information about a target's network without directly interacting with the target systems. Unlike active reconnaissance, which involves sending probes or queries to the target, passive reconnaissance focuses on gathering information passively, often without the target's knowledge."));
            this.cards.push(new Card("../card-image/10-a-exploit.jpg", 10, this.type, "Exploitation attack involves taking advantage of vulnerabilities, weaknesses, or misconfigurations in a target's network infrastructure or systems to gain unauthorized access, execute malicious code, or perform other malicious activities."));
            this.cards.push(new Card("../card-image/10-a-zero.jpg", 10, this.type, "Zero-day exploits targets software vulnerabilities that are unknown to the vendor or software developer. Zero-day vulnerabilities are flaws or weaknesses in software applications or systems that are not yet publicly known and, as a result, have not been patched or fixed by the software vendor. "));
            this.cards.push(new Card("../card-image/11-a-smsphishing.jpg", 11, this.type, "Type of cyberattack in which attackers use text messages (SMS) to trick individuals into divulging sensitive information or taking malicious actions. "));
            this.cards.push(new Card("../card-image/11-a-spearphishing.jpg", 11, this.type, "Targeted form of phishing that is highly tailored to a specific individual, organization, or group. In spear phishing, attackers gather information about their targets to create more convincing and personalized messages, increasing the likelihood of success."));
            this.cards.push(new Card("../card-image/12-a-keylogging.jpg", 12, this.type, "A keylogging cyber attack involves the use of malware to secretly record the keystrokes made by a user on a computer or mobile device. "));
            this.cards.push(new Card("../card-image/12-a-ransomware.jpg", 12, this.type, "Type of cyber attack where attackers deploy malware that encrypts a victim's files or entire system, rendering it inaccessible."));
            this.cards.push(new Card("../card-image/13-a-ddos.jpg", 13, this.type, "Cyber attack where multiple compromised computers are used to flood a target with a high volume of traffic, overwhelming its resources and rendering it inaccessible to legitimate users"));
            this.cards.push(new Card("../card-image/13-a-webddos.jpg", 13, this.type, "In a web-based DDoS attack, the goal is to saturate the target's network or web servers with traffic, making it challenging for the website to respond to legitimate user requests. "));
        } else {
            this.cards.push(new Card("../card-image/1-d-nuke.jpg", 1, this.type, "Wins against all (master cyber-hacker)"));
            this.cards.push(new Card("../card-image/1-d-nuke.jpg", 1, this.type, "Wins against all (master cyber-hacker)"));
            this.cards.push(new Card("../card-image/2-d-firewallfort.jpg", 2, this.type, "Firewall fortification with private, secure IP addresses involves the implementation of robust network security measures. This includes the deployment of firewalls configured to control and monitor traffic between internal and external networks, the use of private IP addressing to obscure internal device identities, and the establishment of secure communication channels such as Virtual Private Networks (VPNs) to safeguard data transmission."));
            this.cards.push(new Card("../card-image/2-d-firewallsoft.jpg", 2, this.type, "Firewall software like McAfee acts as a barrier between networks, controlling incoming and outgoing traffic. It monitors and blocks unauthorized access, preventing cyber threats. With customizable rules and threat intelligence, it fortifies network security, shielding against malware, intrusions, and other potential risks, enhancing overall cybersecurity posture."));
            this.cards.push(new Card("../card-image/3-d-antivirussoftware.jpg", 3, this.type, "Antivirus software safeguards systems by detecting, blocking, and removing malware. It scans files, emails, and web traffic, identifying malicious programs. With regular updates and heuristic analysis, it provides proactive defense, preventing infections, and maintaining the integrity and security of devices and networks against diverse cyber threats."));
            this.cards.push(new Card("../card-image/3-d-antivirusshield.jpg", 3, this.type, "Antivirus software plays a crucial role in cybersecurity by providing a shield against various forms of malicious software, including viruses, malware, ransomware, and other cyber threats. Antivirus programs typically employ a combination of signature-based detection, heuristics, and behavior analysis to identify and neutralize or quarantine malicious files or activities on a computer or network."));
            this.cards.push(new Card("../card-image/4-d-encryptedcode.jpg", 4, this.type, "An Intrusion Detection System (IDS) is a cybersecurity tool designed to monitor network or system activities for signs of malicious activities or security incidents. These systems analyze patterns, behaviors, and signatures to detect anomalies indicative of malicious activities, providing real-time alerts or automated responses. IDS play a crucial role in enhancing overall cybersecurity posture by identifying and mitigating security incidents before they escalate."));
            this.cards.push(new Card("../card-image/4-d-intrusive.jpg", 4, this.type, "Intrusion detection involves continuous monitoring of an OS for suspicious activities. It uses tools and protocols to identify potential breaches, unusual behaviors, or unauthorized access. This proactive approach enables real-time threat detection, facilitating swift responses to potential security incidents, bolstering system protection, and mitigating risks of cyber intrusions."));
            this.cards.push(new Card("../card-image/5-d-training.jpg", 5, this.type, "Training and awareness programs educate users on cybersecurity best practices. They cover threat awareness, safe online behavior, and incident reporting. By empowering individuals, these initiatives reduce human error, enhance vigilance, and foster a security-conscious culture, strengthening the overall resilience of an organization against cyber threats."));
            this.cards.push(new Card("../card-image/5-d-training.jpg", 5, this.type, "Training and awareness programs educate users on cybersecurity best practices. They cover threat awareness, safe online behavior, and incident reporting. By empowering individuals, these initiatives reduce human error, enhance vigilance, and foster a security-conscious culture, strengthening the overall resilience of an organization against cyber threats."));
            this.cards.push(new Card("../card-image/6-d-http.jpg", 6, this.type, "HTTP Strict Transport Security (HSTS) enforces secure connections by instructing browsers to only communicate via HTTPS. It prevents downgrade attacks, ensuring all interactions are encrypted. By mandating secure communication, HSTS enhances website security, reducing the risk of data interception or tampering during transit."));
            this.cards.push(new Card("../card-image/6-d-secure.jpg", 6, this.type, "Employing secure wifi lines would mean strong encryption, authentication systems in place on the network.Using strong encryption protocols such as WPA3 (Wi-Fi Protected Access 3) to encrypt the traffic between Wi-Fi devices and the router. This prevents unauthorized users from eavesdropping on the data being transmitted over the Wi-Fi network. This prevents unauthorized individuals from gaining access to the network."));
            this.cards.push(new Card("../card-image/7-d-algorithm.jpg", 7, this.type,"Encryption protocols are fundamental components of cybersecurity that provide a secure way to protect sensitive data during transmission or storage. An effective and up-to-date encryption protocol ensures that information remains confidential and secure from unauthorized access or tampering. "));
            this.cards.push(new Card("../card-image/7-d-strongkey.jpg", 7, this.type, "Encryption protocols with strong key protection mechanisms ensure the secure transmission and storage of sensitive information by employing robust cryptographic algorithms. These protocols safeguard data by generating and managing encryption keys in a way that makes it extremely challenging for unauthorized parties to decipher the encrypted content without proper authentication."));
            this.cards.push(new Card("../card-image/8-d-audits.jpg", 8, this.type, "Code patches, commonly known as software patches or updates, play a crucial role in cybersecurity by addressing vulnerabilities, bugs, and security flaws in software applications. These patches are applied through a combination of code audits and constant server updates, forming an essential part of a proactive cybersecurity defense strategy. "));
            this.cards.push(new Card("../card-image/8-d-patches.jpg", 8, this.type, "Code patches involve applying rigorous security practices during software development. This includes secure coding standards, vulnerability scanning, and regular updates. By proactively identifying and fixing vulnerabilities in code, patches bolster software defenses, minimizing the potential for exploits and ensuring robust cybersecurity measures within applications."));
            this.cards.push(new Card("../card-image/9-d-awareness.jpg", 9, this.type, "Network segmentation is a security practice that involves dividing a computer network into smaller, isolated segments or subnetworks. The goal is to enhance security by restricting the lateral movement of threats within the network and limiting the impact of a security breach."));
            this.cards.push(new Card("../card-image/9-d-updates.jpg", 9, this.type, "Network segmentation partitions networks into smaller segments, limiting access between them. Constantly updating networks involves patching software, firmware, and configurations to fix vulnerabilities. This proactive approach strengthens security by minimizing attack surfaces and ensures systems stay resilient against evolving cyber threats through regular updates and segmentation reinforcement."));
            this.cards.push(new Card("../card-image/10-d-existing.jpg", 10, this.type, "Penetration testing, often referred to as ethical hacking, is a proactive cybersecurity practice that involves simulating real-world cyberattacks to identify and address existing weaknesses in an organization's systems, networks, or applications. The primary goal of penetration testing is to assess the security posture of an environment, uncover vulnerabilities, and provide actionable recommendations for improvement. "));
            this.cards.push(new Card("../card-image/10-d-potential.jpg", 10, this.type, "Penetration testing simulates cyberattacks to uncover system vulnerabilities. It involves identifying weaknesses in networks, applications, or devices. By mimicking real threats, it pinpoints potential future entry points for attackers. Addressing these weaknesses proactively fortifies cybersecurity measures, preemptively securing systems against evolving threats."));
            this.cards.push(new Card("../card-image/11-d-ices.jpg", 11, this.type, "Involves the use of a comprehensive set of security measures and tools to protect email communication in cloud-based environments. Cloud email services, such as those provided by platforms like Microsoft 365 or Google Workspace, are popular targets for cyber threats, including phishing attacks, malware distribution, and business email compromise (BEC) schemes."));
            this.cards.push(new Card("../card-image/11-d-mfa.jpg", 11, this.type, "MFA enhances security by requiring multiple forms of verification to access an account. It combines factors like passwords, biometrics, tokens, or SMS codes. This layered approach fortifies authentication, significantly reducing the risk of unauthorized access, even if one factor gets compromised."));
            this.cards.push(new Card("../card-image/12-d-malware.jpg", 12, this.type, "User training to educate on safe online practices, mitigating human error. Software solutions like antivirus and anti-malware programs detect and remove malicious software. User training enhances awareness, while software acts as a proactive shield, collectively bolstering defense against diverse malware threats across digital environments."));
            this.cards.push(new Card("../card-image/12-d-virus.jpg", 12, this.type, "Network firewalls act as a barrier between trusted internal networks and untrusted external networks, such as the internet. They monitor and control incoming and outgoing traffic based on predefined security rules. Password systems are fundamental to access control and authentication. They require users to provide a combination of usernames and passwords to verify their identity before granting access to systems, networks, or applications."));
            this.cards.push(new Card("../card-image/13-d-ddos.jpg", 13, this.type, "Offers robust security for web applications. It shields against cyber threats through web application firewalls, DDoS protection, and security testing. These features safeguard against vulnerabilities, ensuring web app resilience and uninterrupted service for Department of Defense systems."));
            this.cards.push(new Card("../card-image/13-d-webfirewall.jpg", 13, this.type, "A security solution designed to protect web applications from various cyber threats, including common web-based attacks. It acts as an additional layer of defense by monitoring, filtering, and blocking HTTP traffic between a web application and the internet."));
        }
 
        
        this.shuffle();
    }
    resetDeck() {
        this.cards = [];
        this.setupDeck();
    }

    addWinningDeck(winnningDeck){
        if(this.isEmpty){
            this.cards = winnningDeck;
            this.shuffle();

        } else {
            throw new Error("Dont add winnning deck since current deck is not empty.");
        }
    }

    drawCard() {
        return this.cards.pop();
    }

    getType() {
        return this.type;
    }

    shuffle(){
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random());
    }

    isEmpty(){
        return !this.cards.length;
    }

    getSize(){
        return this.cards.length;
    }
    
}

class Player {
    constructor(name, deck){
        this.wins = 0;
        this.type = deck.getType();
        this.name = name;
        this.played = false;
        this.deck = deck;
        this.card = null;
        this.wonDeck = [];
    }
    newRound(){
        this.played = false;
    }

    getWinningDeckSize(){
        return this.wonDeck.length;
    }

    addWonCard(card){
        this.wonDeck.push(card);
    }

    addWonDeck(){
        this.deck.addWinningDeck(this.wonDeck);
        this.wonDeck = [];
    }

    playedRound(){
        return this.played;
    }

    getType(){
        return this.type;
    }

    drawCard(){
        this.played = true;
        this.card = this.deck.drawCard();
        return this.card;
    }

    getCard() {
        return this.card;
    }

    getName(){
        return this.name;
    }

    getDeck() {
        return this.deck;
    }
}

function setup(){
    PLAYERS = [];
    let attackDeck = new Deck(Type.Attack);
    let defenseDeck = new Deck(Type.Defense);
    let player1 = new Player("Player 1", attackDeck);
    let player2 = new Player("Player 2", defenseDeck);
    PLAYERS.push(player1);
    PLAYERS.push(player2);
    
    
    document.getElementById("attack-name").innerHTML = player1.getName() + " (Attacker)";
    document.getElementById("defense-name").innerHTML = player2.getName() + " (Defender)";
    document.getElementById("attack-card-count").innerHTML = "Card count: " + player1.getDeck().getSize();
    document.getElementById("defense-card-count").innerHTML = "Card count: " + player2.getDeck().getSize();
    document.getElementById("attack-cards-won-count").innerHTML = "Cards won: " + player1.getWinningDeckSize();
    document.getElementById("defense-cards-won-count").innerHTML = "Cards won: " + player2.getWinningDeckSize();

    PLAYER_PLAYING_INDEX = 0;

    if(getPlayerPlaying().getType() == Type.Attack){
        document.getElementById("defense-draw-btn").disabled = true;
        document.getElementById("attack-draw-btn").disabled = false;
    } else {
        document.getElementById("attack-draw-btn").disabled = true;
        document.getElementById("defense-draw-btn").disabled = false;
    }
    
}

function drawAttackCardButton(){
    let btn = document.getElementById("attack-draw-btn");
    let cardImg = document.getElementById("attack-card");
    let player = getPlayerPlaying();
        
     
    btn.onclick = () => {
        let card = player.drawCard();
        cardImg.src = card.frontImage;
        document.getElementById("attack-card-overlay").style.visibility = "visible";
        document.getElementById("attack-card-info").innerHTML = card.getInfo();
        addToLog(player.getName() + " drew a card!");

        document.getElementById("defense-card").src = "../card-image/blank.jpg";//?
        document.getElementById("defense-card-overlay").style.visibility = "hidden";

        //addWinningCards(player);
        nextTurn();
    }
}

function drawDefenseCardButton(){
    let btn = document.getElementById("defense-draw-btn");
    let cardImg = document.getElementById("defense-card");
    let player = getPlayerPlaying();
        
     
    btn.onclick = () => {
        let card = player.drawCard();
        cardImg.src = card.frontImage;
        document.getElementById("defense-card-overlay").style.visibility = "visible";
        document.getElementById("defense-card-info").innerHTML = card.getInfo();
        addToLog(player.getName() + " drew a card!");
        //addWinningCards(player);
        nextTurn();
    }
}

function addToLog(text){
    let textarea = document.getElementById("game-log-textArea");
    textarea.value += "\n" + text;
    textarea.scrollTop = textarea.scrollHeight;

}

function addWinningCards(){
    for(let i = 0; i < PLAYERS.length; i++){
        if(PLAYERS[i].getDeck().isEmpty() && PLAYERS[i].getWinningDeckSize() > 0) {
            addToLog(PLAYERS[i].getName() + " adds "+ PLAYERS[i].getWinningDeckSize() +" cards they won into their deck!");
            PLAYERS[i].addWonDeck();
        }
    }
    
}

function endGame(){
    if(everyonePlayed()){
        if(PLAYERS[0].getDeck().isEmpty() && PLAYERS[0].getWinningDeckSize() == 0){
            addToLog(PLAYERS[1].getName() + " won the game!");
            PLAYER_WON = PLAYERS[1];
            document.getElementById("attack-draw-btn").disabled = true;
            document.getElementById("defense-draw-btn").disabled = true;
            return true;
        } else if (PLAYERS[1].getDeck().isEmpty() && PLAYERS[1].getWinningDeckSize() == 0) {
            addToLog(PLAYERS[0].getName() + " won the game!");
            PLAYER_WON = PLAYERS[0];
            document.getElementById("attack-draw-btn").disabled = true;
            document.getElementById("defense-draw-btn").disabled = true;
            return true;
        }else {
            return false;
        }
    } else {
        return false;
    }
    
}

function startGame(){
    setup();
    INTERVAL = setInterval(function() {
        drawDefenseCardButton();
        drawAttackCardButton();
        updateCardCount();
        addWinningCards();
        

        if(checkWin()){
            displayCrown();
            clearInterval(INTERVAL); //stop this interval
        }
        //resetRound();
        
    }, 30);
    
    
}

function displayCrown(){
    if(PLAYER_WON.getType() == Type.Attack){
        document.getElementById("attack-crown").style.visibility = "visible";
    } else {
        document.getElementById("defense-crown").style.visibility = "visible";
    }
}

function checkWin(){
    if(everyonePlayed()){
        
        let player1 = PLAYERS[0];
        let player2 = PLAYERS[1];
        let player1Card = player1.getCard();
        let player2Card = player2.getCard();
    
        if(player1Card.getLevel() > player2Card.getLevel()) {
            addToLog(player1.getName() + "'s card (level " + player1Card.getLevel() + ") beat " + player2.getName() + "'s card (level " + player2Card.getLevel() + ")");
            addToLog(player1.getName() + " wins this round and win their card back!\n");
            player1.addWonCard(player1Card);
            
    
        } else if(player1Card.getLevel() < player2Card.getLevel()) {
            addToLog(player2.getName() + "'s card (level " + player2Card.getLevel() + ") beat " + player1.getName() + "'s card (level " + player1Card.getLevel() + ")");
            addToLog(player2.getName() + " wins this round and win their card back!\n");
            player2.addWonCard(player2Card);
        } else {
            addToLog(player1.getName() + "'s card (level " + player1Card.getLevel() + ") is equal to " + player2.getName() + "'s card (level " + player2Card.getLevel() + ")");
            addToLog("WAR!!!");
        }

        if(endGame()){
            return true;
        } else{
            resetRound();
            return false;
        }

        

    } 
    
}

function everyonePlayed(){
    if(PLAYERS[0].playedRound() && PLAYERS[1].playedRound()){
        return true;
    } else {
        return false;
    }
}

function resetRound(){
    PLAYERS[0].newRound();
    PLAYERS[1].newRound();
}

function updateCardCount(){
    for(let i = 0; i < PLAYERS.length; i++){
        if(PLAYERS[i].getType() == Type.Attack){
            document.getElementById("attack-card-count").innerHTML = "Card count: " + PLAYERS[i].getDeck().getSize();
            document.getElementById("attack-cards-won-count").innerHTML = "Cards won: " + PLAYERS[i].getWinningDeckSize();
        } else {
            document.getElementById("defense-card-count").innerHTML = "Card count: " + PLAYERS[i].getDeck().getSize();
            document.getElementById("defense-cards-won-count").innerHTML = "Cards won: " + PLAYERS[i].getWinningDeckSize();
        }
    }
}

function nextTurn(){
    if(PLAYER_PLAYING_INDEX == 1){
        PLAYER_PLAYING_INDEX = 0;
    } else {
        PLAYER_PLAYING_INDEX = 1;
    }

    if(getPlayerPlaying().getType() == Type.Attack){
        document.getElementById("defense-draw-btn").disabled = true;
        document.getElementById("attack-draw-btn").disabled = false;
    } else {
        document.getElementById("attack-draw-btn").disabled = true;
        document.getElementById("defense-draw-btn").disabled = false;
    }
}

function getPlayerPlaying(){
    return PLAYERS[PLAYER_PLAYING_INDEX];
}

startGame();

