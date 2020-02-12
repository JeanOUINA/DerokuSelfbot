/***
██████╗ ███████╗██████╗  ██████╗ ██╗  ██╗██╗   ██╗    ██╗   ██╗ ██████╗ ███████╗
██╔══██╗██╔════╝██╔══██╗██╔═══██╗██║ ██╔╝██║   ██║    ██║   ██║██╔═████╗╚════██║
██║  ██║█████╗  ██████╔╝██║   ██║█████╔╝ ██║   ██║    ██║   ██║██║██╔██║    ██╔╝
██║  ██║██╔══╝  ██╔══██╗██║   ██║██╔═██╗ ██║   ██║    ╚██╗ ██╔╝████╔╝██║   ██╔╝ 
██████╔╝███████╗██║  ██║╚██████╔╝██║  ██╗╚██████╔╝     ╚████╔╝ ╚██████╔╝██╗██║  
╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝       ╚═══╝   ╚═════╝ ╚═╝╚═╝  


(c'est la 0.6, mais chut)
 */

 /**
██╗███╗   ██╗███████╗████████╗██████╗ ██╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
██║██╔██╗ ██║███████╗   ██║   ██████╔╝██║   ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
██║██║╚██╗██║╚════██║   ██║   ██╔══██╗██║   ██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║██║ ╚████║███████║   ██║   ██║  ██║╚██████╔╝╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

 1. Remplir les champs ci-dessous en laissant les guillemets
 2. ouvrir cmd dans le dossier et faire node index.js
 3. Après que le script ait installé les dépendances, relancer le index avec node index
 4. Profitez du selfbot!!

 Note:  les dépendances s'installent toutes seules au premier démmarage. 
        Certaines sont contenus directement dans l'index tel que discord.js, node-fetch, figlet, etc.

*/

/**
 ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗ ██╗   ██╗██████╗  █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝ ██║   ██║██╔══██╗██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗██║   ██║██████╔╝███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║██║   ██║██╔══██╗██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

 */

const token = "ton token ici"//ton token
const prefix = "/"//ton prefix
const premium = ""//ton code premium si tu en as un. notez que les clés ne sont pas partageable et résulteront à l'effacement de ces dernières.

/**
███████╗ █████╗  ██████╗ 
██╔════╝██╔══██╗██╔═══██╗
█████╗  ███████║██║   ██║
██╔══╝  ██╔══██║██║▄▄ ██║
██║     ██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚══▀▀═╝ 

 Q: Pourquoi avoir obfusquer le code?
 R: Car nous ne voulons pas que le code soit publique et que tout le monde puisse l'intégrer à son bot ou son selfbot. 
 Aussi car les commandes premium sont inclusent mais se débloquent uniquement si le code est valable. 
 Sinon, il serait hyper facile de s'attribuer le premium sans code valide.
 
 Q: Est-ce que je peux partager mon code premium?
 R: Oui et non. tant que c'est vos comptes, oui mais si c'est pour donner à tout discord, c'est non et votre clé sera supprimé.

 Q: Si j'ai le premium de la première version, est-ce que je le garde quand il y a une mise à jour du bot?
 R: Oui, bien sûr. Nous estimons que ceci est une nécessité et que nous ne devrions pas payer plusieurs fois.

 Q: J'ai acheté un code chez quelqu'un d'autre pour moins cher. Je me suis fais arnaquer, que puis-je faire?
 R: Nous ne pouvons rien pour vous. Il faut acheter son code chez jeanouina (allez me mp depuis le serveur deroku) UNIQUEMENT.

 Q: Comment puis-je faire en sorte que le selfbot soit allumé 24h/24h 7j/7j ?
 R: Nous proposons des solutions d'hebergement. Elle sont de 3€/mois. 
 Pour tout hébergement nodejs, veuillez contacter JeanOUINA#9999 ou alors aller sur https://discord.gg/JMzey6.
 Sinon, vous pouvez prendre un hébergement chez d'autre site comme evennode ou heroku voir glitch.io.

 Q: Est-ce que mon token est envoyé quelque part?
 R: Non, nous n'envoyons rien. comme nous l'avons dit plus haut, nous n'avons pas obfusquer notre selfbot pas pour grabber les tokens mais plutôt pour préserver notre code.

 Q: qu'est-ce qui est donc envoyé?
 R: Nous envoyons juste le code premium si vous avez remplis le champ et nous faisons une requete pour savoir si le bot a des mises à jour.

 Q: Si je veux acheter le premium, où dois-je me tourner et chez qui?
 R: Il faut mp JeanOUINA#9999 ou alors aller sur https://discord.gg/JMzey6.

 

 ██████╗██████╗ ███████╗██████╗ ██╗████████╗███████╗
██╔════╝██╔══██╗██╔════╝██╔══██╗██║╚══██╔══╝██╔════╝
██║     ██████╔╝█████╗  ██║  ██║██║   ██║   ███████╗
██║     ██╔══██╗██╔══╝  ██║  ██║██║   ██║   ╚════██║
╚██████╗██║  ██║███████╗██████╔╝██║   ██║   ███████║
 ╚═════╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝   ╚═╝   ╚══════╝
                                                    
 Développeur: Jeanouina
    Discord: JeanOUINA#9999 // actuellement ban
    Github: https://github.com/jeanouina
    Email: jeanouina@gmail.com

 Modules utilisées:
    dans l'index.js:
        selfbot.js (https://www.npmjs.com/package/selfbot.js) - Discord.js sauf pour les selfbots.
        node-fetch (modifié) (https://www.npmjs.com/package/node-fetch) - Pour faire les requetes http et https
        figlet (modifié) (https://www.npmjs.com/package/figlet) - Pour la commande figlet
        jsqr (https://www.npmjs.com/package/jsqr) - Pour les commandes qui utilisent le qrcode
        pngjs (https://www.npmjs.com/package/pngjs) - décoder et encoder les fichiers .png pour les commandes images
        node-pureimage (modifié) (https://github.com/joshmarinacci/node-pureimage) - manipuler les images dans les commandes images
        chalk (https://www.npmjs.com/package/chalk) - Apporter de la couleur dans la console à quelques endroits
        boxen (https://www.npmjs.com/package/boxen) - utilisée pour faire une box pour le message des mises à jour.
        retrotext (modifié) (https://www.npmjs.com/package/retrotext) - commande retrotext
        gifencoder (https://www.npmjs.com/package/gifencoder) - encoder en .gif
        omggif (https://www.npmjs.com/package/omggif) - decoder un .gif
        mathjs (https://www.npmjs.com/package/mathjs) - pour la commande calc
        momentjs (https://momentjs.com/) - Pour le formattage de la date à différents endroits dans le selfbot.
    En dehors de l'index.js:
        selfbot.js (https://www.npmjs.com/package/selfbot.js) - Discord.js sauf pour les selfbots.
        vm2 (https://www.npmjs.com/package/vm2) - executer les plugins du selfbot sans leur donner trop de permissions.
        ws (https://www.npmjs.com/package/ws) - faire des WebSocket.
        typescript (https://www.npmjs.com/package/typescript) - Utilisé pour les plugins en typescript
        jimp (https://www.npmjs.com/package/jimp) - Manipulation d'image.
    Pour Minifier:
        Webpack: (https://webpack.js.org/) - Il assemble certains modules pour en faire qu'un seul fichier.
 
 */



 //Les 5 lignes ci-dessous sont pour l'utilisation de vos informations fournies plus haut dans le selfbot. veuillez ne pas modifier ces prochaines lignes.
module.exports = {//NE PAS TOUCHER
    token,        //NE PAS TOUCHER
    prefix,       //NE PAS TOUCHER
    premium       //NE PAS TOUCHER
}                 //NE PAS TOUCHER
