export default function getUV(uv: number): string {
    if (uv < 3) return "Low";
    else if (uv < 6) return "Moderate";
    else if (uv < 8) return "High";
    else if (uv < 11) return "Very Hight";
    else return "Extreme";
}