const RamenContext = {
    ramenEndpoint: () => `${Api.baseUrl}ramens`,
    ramenLista: () => `${RamenContext.ramenEndpoint()}/all-ramens`,
    ramenById: (id) => `${RamenContext.ramenEndpoint()}/one-ramen/${id}`,
    createRamen: () => `${RamenContext.ramenEndpoint()}/create-ramen`,
    updateRamenById: (id) => `${RamenContext.ramenEndpoint()}/update-ramen/${id}`,
    deleteRamenById: (id) => `${RamenContext.ramenEndpoint()}/delete-ramen/${id}`,
  };
  
  export const Api = {
    baseUrl: "/",
    ...RamenContext,
  };

  export default Api;