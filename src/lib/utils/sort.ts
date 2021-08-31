type SortableEntity = {
    title: string,
    addedOn?: string,
    stars?: number,
}

export const compare = (sorting: string) => {
    return (sortableEntityA : SortableEntity, sortableEntityB : SortableEntity) : number => {
        switch (sorting) {
          case "added_desc":
            return new Date(sortableEntityB.addedOn || "").getTime() - new Date(sortableEntityA.addedOn || "").getTime();
          case "added_asc":
            return new Date(sortableEntityA.addedOn || "").getTime() - new Date(sortableEntityB.addedOn || "").getTime();
          case "name_asc":
            return sortableEntityA.title.toLowerCase().localeCompare(sortableEntityB.title.toLowerCase());
          case "name_desc":
            return sortableEntityB.title.toLowerCase().localeCompare(sortableEntityA.title.toLowerCase());
          case "stars_desc":
            return (sortableEntityB.stars || 0) - (sortableEntityA.stars || 0);
          case "stars_asc":
            return (sortableEntityA.stars || 0) - (sortableEntityB.stars || 0);
        }
    }
}