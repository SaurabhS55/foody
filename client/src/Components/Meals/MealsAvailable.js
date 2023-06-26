import React, { useEffect, useState } from "react";
// import AvailableMeals from '../../assets/dummy-meals'
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
function MealsAvailable() {
  const [AvailableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch("/api");
      if (!res.ok) {
        throw new Error("Something went wrong");
      } else {
        const data = await res.json();
        setAvailableMeals(data);
        setIsLoading(false);
      }
    };
    fetchMeals().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);
  let content = <p style={{ textAlign: "center" }}>No meals found</p>;
  if (isLoading) {
    content = <p style={{ textAlign: "center" }}>Loading...</p>;
  } else if (error) {
    content = <p style={{ textAlign: "center" }}>{error}</p>;
  } else if (AvailableMeals !== null) {
    content = AvailableMeals.map((ele) => <MealItem key={ele.id} item={ele} />);
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
}

export default MealsAvailable;
