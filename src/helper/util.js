export const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price / 1);
};

export const goToTheTop = () => {
  scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}