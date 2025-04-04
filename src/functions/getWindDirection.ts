export default function getWindDirection(degrees: number): string {
    const directions = [
        "North", "North-East", "East", "South-East", "South",
        "South-West", "West", "North-West"
    ];

    degrees = (degrees % 360 + 360) % 360;

    const index = Math.floor((degrees + 22.5) / 45) % 8;

    return directions[index];
}
