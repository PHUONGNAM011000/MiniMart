import { useEffect, useState } from 'react';

const useSelect = (dataProduct) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        priceIncrease: 'amount',
        nameIncrease: 'name',
        priceDecrease: 'amount',
        nameDecrease: 'name',
        idIncrease: 'id',
        idDecrease: 'id',
      };
      const sortProperty = types[type];
      const sorted =
        sortProperty === 'name'
          ? type === 'nameDecrease'
            ? [...dataProduct]
                .sort((a, b) =>
                  a[sortProperty] > b[sortProperty]
                    ? 1
                    : b[sortProperty] > a[sortProperty]
                    ? -1
                    : 0
                )
                .reverse()
            : [...dataProduct].sort((a, b) =>
                a[sortProperty] > b[sortProperty]
                  ? 1
                  : b[sortProperty] > a[sortProperty]
                  ? -1
                  : 0
              )
          : type === 'priceDecrease'
          ? [...dataProduct].sort((a, b) => b[sortProperty] - a[sortProperty])
          : [...dataProduct]
              .sort((a, b) => b[sortProperty] - a[sortProperty])
              .reverse();

      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType, dataProduct]);

  return {
    data,
    setSortType,
  };
};

export default useSelect;
