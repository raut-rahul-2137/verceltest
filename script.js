document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorBtn');
    const colors = [
        'from-blue-500 to-purple-600',
        'from-green-500 to-teal-600',
        'from-red-500 to-pink-600',
        'from-yellow-500 to-orange-600'
    ];
    let currentColorIndex = 0;

    button.addEventListener('click', () => {
        const body = document.body;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        body.className = `bg-gradient-to-r ${colors[currentColorIndex]} min-h-screen flex items-center justify-center`;
        
        // Add a fun animation effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
}); 