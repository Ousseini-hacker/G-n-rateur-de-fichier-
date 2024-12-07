
function generateFile() {
    // Récupérer les valeurs des champs
    const content = document.getElementById("file-content").value;
    const fileName = document.getElementById("file-name").value || "fichier"; // Nom par défaut
    const fileFormat = document.getElementById("file-format").value;
    
    // Créer un objet Blob contenant le texte
    const blob = new Blob([content], { type: "text/plain" });

    // Créer un lien de téléchargement pour le fichier
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName + fileFormat;

    // Simuler un clic pour télécharger le fichier
    link.click();
}
