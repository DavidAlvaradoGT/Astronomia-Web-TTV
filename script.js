document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'space-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');
    let width, height;
    

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    const sun = {x: () => width / 2, y: () => height / 2, radius: 25, color: '#fba919'}
    const planets = [
        {distance: 80, radius: 4, color: '#94a3b8', speed: 0.03, angle: Math.random() * Math.PI},
        {distance: 130, radius: 7, color: '#591698ff', speed: 0.02, angle: Math.random() * Math.PI},
        {distance: 190, radius: 8, color: '#38bdf8', speed: 0.15, angle: Math.random() * Math.PI},
        {distance: 260, radius: 6, color: '#f87171', speed: 0.01, angle: Math.random() * Math.PI},
        {distance: 340, radius: 14, color: '#fbbf24', speed: 0.00751, angle: Math.random() * Math.PI}     
    ];
function animate() {
    
    ctx.fillStyle = 'rgba(10, 15, 30, 0.2)';
    ctx.fillRect(0, 0, width, height);
    
    const cx = sun.x();
    const cy = sun.y();

    ctx.beginPath();
    ctx.arc(cx, cy, sun.radius, 0, Math.PI * 2);
    ctx.fillStyle = sun.color;
    ctx.shadowBlur = 25;
    ctx.shadowColor = sun.color;
    ctx.fill();
    ctx.ShadowBlur = 0;

    planets.forEach(planet => {
        ctx.beginPath();
        ctx.arc(cx, cy, planet.distance, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.stroke();

        planet.angle += planet.speed;
        const px = cx + Math.cos(planet.angle) * planet.distance;
        const py = cy + Math.sin(planet.angle) * planet.distance;

        ctx.beginPath();
        ctx.arc(px, py, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
    });
    requestAnimationFrame(animate);

}
animate ();
});