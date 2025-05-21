export function draw() {
    const canvas = document.getElementById('gameBoard')
    
    if(canvas.getContext) {
        const ctx = canvas.getContext('2d')

        let x = 0
        let y = 0

        for( let i = 21; i > 0; i--) {
            for( let i = 11; i > 0; i--) {
                ctx.fillStyle = "rgb(50, 181, 11)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
                ctx.fillStyle = "rgb(170, 255, 0)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
            }
            y += 25
            x = 0
            for( let i = 11; i > 0; i--) {
                ctx.fillStyle = "rgb(170, 255, 0)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
                ctx.fillStyle = "rgb(50, 181, 11)"
                ctx.fillRect(x, y, 25, 25 )
                x += 25
            }
            y += 25
            x = 0
        }
    }
}
