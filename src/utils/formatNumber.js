export default function toBRL(number) {
    const n = number ?? 0;
    return n.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
