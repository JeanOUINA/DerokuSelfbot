/**
 * DDDDDDD    EEEEEEE  RRRRRRR      OOOO     KK  KK    UU        UU      VV            VV      0000              44
 * DD    DD   EE       RR    RR   OO    OO   KK KK     UU        UU       VV          VV     00   000           44
 * DD     DD  EE       RR    RR  OO      OO  KKKK      UU        UU        VV        VV     00   00 00         44     
 * DD     DD  EEEEEEE  RRRRRRRR  OO      OO  KKKK      UU        UU         VV      VV      00  00  00        44  44
 * DD     DD  EEEEEEE  RRRR      OO      OO  KK KK     UU        UU          VV    VV       00 00   00       44   44
 * DD     DD  EE       RR RR     OO      OO  KK  KK    UU        UU           VV  VV        0000    00      444444444444 
 * DD    DD   EE       RR  RR     OO    OO   KK   KK    UU      UU             VVVV          00    00  ###        44
 * DDDDDDD    EEEEEEE  RR   RR      OOOO     KK    KK     UUUUUU                VV             0000    ###        44
 */

 /**
  ___ _   _ ____ _____ ____  _   _  ____ _____ ___ ___  _   _ ____  
 |_ _| \ | / ___|_   _|  _ \| | | |/ ___|_   _|_ _/ _ \| \ | / ___| 
  | ||  \| \___ \ | | | |_) | | | | |     | |  | | | | |  \| \___ \ 
  | || |\  |___) || | |  _ <| |_| | |___  | |  | | |_| | |\  |___) |
 |___|_| \_|____/ |_| |_| \_\\___/ \____| |_| |___\___/|_| \_|____/ 

 1. Remplire les champs ci-dessous en laissant les guillemets
 2. ouvrir cmd dans le dossier et faire node index.js
 3. Après que le script ait installé les dépendances, relancer le index avec node index
 4. Profitez du selfbot!!

 Note: les dépendances s'installent tout seul au premier démmarage.

*/

/**
   ____ ___  _   _ _____ ___ ____ _   _ ____      _  _____ ___ ___  _   _ 
  / ___/ _ \| \ | |  ___|_ _/ ___| | | |  _ \    / \|_   _|_ _/ _ \| \ | |
 | |  | | | |  \| | |_   | | |  _| | | | |_) |  / _ \ | |  | | | | |  \| |
 | |__| |_| | |\  |  _|  | | |_| | |_| |  _ <  / ___ \| |  | | |_| | |\  |
  \____\___/|_| \_|_|   |___\____|\___/|_| \_\/_/   \_\_| |___\___/|_| \_|
                                                                          
 */
const token = "{user-token}"//ton token
const prefix = "{user-prefix}"//ton prefix
const color = "{user-color}"//"00ffb2"//la couleur des embeds en hexadécimal ou une couleur supporté par discord.js
const premium = "{user-premium-key}"//ton code premium si tu en as un. notez que les clés ne sont pas partageable et résulteront à l'effacement de ces dernières.
const twitch = "{user-twitch}"//ton url twitch [𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙍𝙀𝙌𝙐𝙄𝙎]
const team = "{user-team}" // Si vous faites parti d'une team de raid, vous pouvez peut être avoir des commandes premium et des commandes personalisé à la team.
const nsfw = false // Bypass la verif du salon nsfw(ne vérifie pas si le salon actuel est nsfw pour les commandes nsfw.) false = ne bypass pas, true = bypass
//Entrez le code de team fourni par le leader ou un staff.

/**
  _____ _    ___  
 |  ___/ \  / _ \ 
 | |_ / _ \| | | |
 |  _/ ___ \ |_| |
 |_|/_/   \_\__\_\
 
 Q: Pourquoi avoir obfusquer le code?
 R: Car nous ne voulons pas que le code soit publique et que tout le monde puisse l'intégrer à son bot ou son selfbot. 
 Aussi car les commandes premium sont inclusent mais se débloquent uniquement si le code est valable. 
 Sinon, il serait hyper facile de s'attribuer le premium sans code valide.
 
 Q: Est-ce que je peux partager mon code premium?
 R: Oui et non. Si vous l'utilisez sur 2 comptes maximum sur le même ordinateur, oui mais si c'est pour donner à tout discord, c'est non et votre clé sera supprimé.

 Q: Si j'ai le premium de la première version, est-ce que je le garde quand il y a une mise à jour du bot?
 R: Oui, bien sûr. Nous estimons que ceci est une nécessité et que nous ne devrions pas payer plusieurs fois.

 Q: J'ai acheté un code chez quelqu'un d'autre pour moins cher. Je me suis fais arnaquer, que puis-je faire?
 R: Nous ne pouvons rien pour vous. Il faut acheter son code chez ๖̶̶̶ζJeanOUINAζ͜͡ 𝙈𝙉𝑳͜͡ζ𝐎𝐬𝐦𝐨𝐙ȺƐƓ#6666 UNIQUEMENT.

 Q: Comment puis-je faire en sorte que le selfbot soit allumé 24h/24h 7j/7j ?
 R: Nous proposons des solutions d'hebergement. Elle sont de 3€/mois. 
 Pour tout hébergement nodejs, veuillez contacter ๖̶̶̶ζJeanOUINAζ͜͡ 𝙈𝙉𝑳͜͡ζ𝐎𝐬𝐦𝐨𝐙ȺƐƓ#6666 ou alors aller sur https://discord.gg/JMzey6.
 Sinon, vous pouvez prendre un hébergement chez d'autre site comme evennode ou heroku voir glitch.io.

 Q: Est-ce que mon token est envoyé quelque part?
 R: Non, nous n'envoyons rien. comme nous l'avons dit plus haut, nous n'avons pas obfusquer notre selfbot pas pour grabber les tokens mais plutôt pour préserver notre code.

 Q: qu'est-ce qui est donc envoyé?
 R: Nous envoyons juste le code premium si vous avez remplis le champs et nous faisons une requete pour savoir si le bot a des mises à jour.

 Q: Si je veux acheter le premium, où dois-je me tourner et chez qui?
 R: Il faut mp ๖̶̶̶ζJeanOUINAζ͜͡ 𝙈𝙉𝑳͜͡ζ𝐎𝐬𝐦𝐨𝐙ȺƐƓ#6666 ou alors aller sur https://discord.gg/JMzey6.
 */


 //Les 7 lignes ci-dessous sont pour l'utilisation de vos informations fournies plus haut dans le selfbot. veuillez ne pas modifier ces prochaines lignes.
module.exports = {
    token,
    prefix,
    color,//NE PAS TOUCHER
    premium,
    twitch,
    team,
    nsfw
}