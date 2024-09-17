document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeTitleForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan submit davranışını engelle

        var newTitle = document.getElementById('newTitle').value;
        if (newTitle.trim() !== '') { // Başlık boş değilse
            document.title = newTitle; // Sayfanın başlığını değiştir
        }
    });
});
