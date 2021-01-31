/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import CourceCard from '../../components/CourceCard/CourceCard';
import { data } from '../../mock';

const ListPurchasedCourseesLayout = () => {
  return (
    <div className="">
      <div className="pt-8 flex flex-wrap ">
        {data.map(({ id, titulo, idProfesor, duracion, urlImagen }, index) => (
          <Link href={`/curso/${encodeURIComponent(id)}`} key={id + index}>
            <CourceCard
              containerStyle="flex-grow"
              titulo={titulo}
              idProfesor={idProfesor}
              duracion={duracion}
              urlImagen={urlImagen}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListPurchasedCourseesLayout;
