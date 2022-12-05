import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "./sort.svg";
import { KeyboardEvent } from "react";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <div className={styles.sortName} id='sort'>Сортировка</div>
      <button
        id="rating"
        tabIndex={0}
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({ [styles.active]: sort == SortEnum.Rating })}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby='sort rating'
      >
        <SortIcon className={styles.sortIcon} />
        По рейтенгу
      </button>
      <button
        id="price"
        tabIndex={0}
        onClick={() => setSort(SortEnum.Price)}
        className={cn({ [styles.active]: sort == SortEnum.Price })}
        aria-selected={sort == SortEnum.Price}
        aria-labelledby='sort price'
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </button>
    </div>
  );
};
