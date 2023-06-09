import { useEffect, useState } from "react";
import Display from "./Display";
import { useCardapio } from "../../hooks/CardapioProvider";
import { useMeals } from "../../hooks/MealsProvider";

export default function HomePage() {
  const [today, setToday] = useState();
  const [cardapioDate, setCardapioDate] = useState();
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  const cardapios = useCardapio();
  const meals = useMeals();

  // muda nome da página
  useEffect(() => {
    document.title = "Ruview | Home";
  }, []);

  // define o dia atual e formata última atualização do cardápio
  useEffect(() => {
    const dayOfWeek = new Date().getDay();

    switch (dayOfWeek) {
      case 0:
        setToday("Domingo");
        break;

      case 1:
        setToday("Segunda-feira");
        break;

      case 2:
        setToday("Terça-feira");
        break;

      case 3:
        setToday("Quarta-feira");
        break;

      case 4:
        setToday("Quinta-feira");
        break;

      case 5:
        setToday("Sexta-feira");
        break;

      case 6:
        setToday("Sábado");
        break;

      default:
        break;
    }

    try {
      const formattedDate = new Date(
        cardapios.cardapioRefeitorio.updated_at
      ).toLocaleString("en-GB");
      setCardapioDate(formattedDate);
    } catch (error) {
      setCardapioDate("~Carregando cardápio...~");
    }
  }, [cardapios]);

  // define se a página ainda tem que carregar os dados de meals e cardapio
  useEffect(() => {
    if (!meals.loading && !cardapios.loading) {
      setLoading(false);
    }
  }, [cardapios, meals]);

  // define se a página deve exibir mensagem de erro
  useEffect(() => {
    if (meals.error) {
      setHasError(meals.error);
    }
    if (cardapios.error) {
      setHasError(cardapios.error);
    }
  }, [cardapios, meals]);

  return (
    <Display
      today={today}
      cardapioDate={cardapioDate}
      loading={loading}
      hasError={hasError}
    />
  );
}
