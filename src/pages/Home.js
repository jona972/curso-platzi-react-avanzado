import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      subtitle="Puedes encontrar animales muy bonitos"
    >
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
