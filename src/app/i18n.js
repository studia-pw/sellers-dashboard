import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        dashboard: "Dashboard",
        theme: {
          light: "Light",
          dark: "Dark",
        },
        sideMenu: {
          overview: "Overview",
          orders: "Orders",
          salesQuality: "Sales quality",
          sellersReviews: "Sellers' reviews",
          offerRanking: "Offer ranking",
          salesTips: "Sales tips",
        },
        offer: {
          name: "Phone 8/128",
          sold: "Sold",
          turnover: "Turnover",
          pieces: "{{count}} pieces",
          bestSellers: "Best sellers",
          leastSellers: "Least sellers",
        },
        review: {
          minutesAgo: "{{count}} minutes ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          stars: "{{count}} stars",
          name: "Name",
          surname: "Surname",
        },
        orders: {
          unpaidOrders: "Unpaid orders",
          notSentOrders: "Not sent orders",
          refundedOrders: "Refunded orders",
          numberSummary: "{{count}} out of {{total}}",
        }
      },
    },
    pl : {
      translation: {
        dashboard: "Panel główny",
        theme: {
          light: "Jasny",
          dark: "Ciemny",
        },
        sideMenu: {
          overview: "Przegląd",
          orders: "Zamówienia",
          salesQuality: "Jakość sprzedaży",
          sellersReviews: "Opinie kupujących",
          offerRanking: "Ranking ofert",
          salesTips: "Porady sprzedażowe",
        },
        offer: {
          name: "Telefon 8/128",
          sold: "Sprzedano",
          turnover: "Obrót",
          pieces: "{{count}} sztuki",
          bestSellers: "Najczęściej sprzedawane",
          leastSellers: "Najrzadziej sprzedawane",
        },
        review: {
          minutesAgo: "{{count}} minuty temu",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          stars: "{{count}} gwiazdki",
          name: "Imię",
          surname: "Nazwisko",
        },
        orders: {
          unpaidOrders: "Zamówienia nieopłacone",
          notSentOrders: "Zamówienia niewysłane",
          refundedOrders: "Zamówienia zwrócone",
          numberSummary: "{{count}} z {{total}}",
        }
      }
    }
  },
});
