import React, { useState } from "react";

const fundacje = [
  {
    id: 1,
    name: "Fundacja 'Dbam o Zdrowie'",
    mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
    needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
  },
  {
    id: 2,
    name: "Fundacja 'Dla dzieci'",
    mission: "Pomoc dzieciom z ubogich rodzin.",
    needs: "ubrania, meble, zabawki",
  },
  {
    id: 3,
    name: "Fundacja 'Bez domu'",
    mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
    needs: "ubrania, jedzenie, ciepłe koce",
  },
  {
    id: 4,
    name: "Fundacja 4",
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 5,
    name: "Fundacja 5",
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 6,
    name: "Fundacja 5",
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 7,
    name: "Fundacja 7",
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 8,
    name: "Fundacja 8",
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 9,
    name: "Fundacja 9",
    mission: "Lorem, ipsum.",
    needs: "Lorem, ipsum dolor",
  },
];

const organizacje = [
  {
    id: 1,
    name: 'Organizacja "Lorem Ipsum 1"',
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 2,
    name: 'Organizacja "Lorem Ipsum 2"',
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 3,
    name: 'Organizacja "Lorem Ipsum 3"',
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 4,
    name: 'Organizacja "Lorem Ipsum 4"',
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 5,
    name: 'Organizacja "Lorem Ipsum 5"',
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 6,
    name: 'Organizacja "Lorem Ipsum 6"',
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
];

const zbiorki = [
  {
    id: 1,
    name: `Zbiórka "Lorem Ipsum 1"`,
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 2,
    name: `Zbiórka "Lorem Ipsum 2"`,
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
  {
    id: 3,
    name: `Zbiórka "Lorem Ipsum 3"`,
    mission: "Lorem, ipsum",
    needs: "Lorem, ipsum dolor",
  },
];

const Organizations = () => {
  const [category, setCategory] = useState("fundacje");
  const [page, setPage] = useState(1);

  const perPage = 3;

  const getData = () => {
    if (category === "fundacje") {
      return fundacje.slice((page - 1) * perPage, page * perPage);
    } else if (category === "organizacje") {
      return organizacje.slice((page - 1) * perPage, page * perPage);
    } else {
      return zbiorki;
    }
  };

  const getTotalItems = () => {
    if (category === "fundacje") {
      return fundacje.length;
    } else if (category === "organizacje") {
      return organizacje.length;
    } else {
      return zbiorki.length;
    }
  };

  const totalPages = () => {
    return Math.ceil(getTotalItems() / perPage);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const shouldPaginate = getTotalItems() > 3;

  return (
    <div className="organizations">
      <div className="organization-header">
        <h1 className="organization-title">Komu pomagamy?</h1>
        <div className="header-border"></div>
      </div>
      <div className="buttons">
        <button
          className={category === "fundacje" ? "active" : ""}
          onClick={() => handleCategoryChange("fundacje")}
        >
          Fundacjom
        </button>
        <button
          className={category === "organizacje" ? "active" : ""}
          onClick={() => handleCategoryChange("organizacje")}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className={category === "zbiorki" ? "active" : ""}
          onClick={() => handleCategoryChange("zbiorki")}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <div className="organization-description">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </div>
      <div className="content">
        {getData().map((item) => (
          <div className="entry" key={item.id}>
            <div className="organization-main">
              <h2 className="organization-name">{item.name}</h2>
              <p className="organization-mission">
                Cel i misja: {item.mission}
              </p>
            </div>
            <p className="organization-needs"> {item.needs}</p>
          </div>
        ))}
      </div>
      {shouldPaginate && (
        <div className="pagination">
          {[...Array(totalPages())].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={page === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Organizations;
