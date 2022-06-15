const RamenContext = {
    ramenEndpoint: () => `${Api.baseUrl}ramens`,
    ramenLista: () => `${RamenContext.ramenEndpoint()}/all-ramens`,
    ramenById: (id) => `${RamenContext.ramenEndpoint()}/one-ramen/${id}`,
    createRamen: () => `${RamenContext.ramenEndpoint()}/create-ramen`,
    updateRamenById: (id) => `${RamenContext.ramenEndpoint()}/update-ramen/${id}`,
    deleteRamenById: (id) => `${RamenContext.ramenEndpoint()}/delete-ramen/${id}`,
  };

  
  export const Api = {
    baseUrl: "http://localhost:3050/",
    ...RamenContext
  };



const RamenContextBack = {
    ramenEndpoint: () => `/ramens`,
    ramenLista: () => `${RamenContextBack.ramenEndpoint()}/all-ramens`,
    ramenById: (id) => `${RamenContextBack.ramenEndpoint()}/one-ramen/${id}`,
    createRamen: () => `${RamenContextBack.ramenEndpoint()}/create-ramen`,
    updateRamenById: (id) => `${RamenContextBack.ramenEndpoint()}/update-ramen/${id}`,
    deleteRamenById: (id) => `${RamenContextBack.ramenEndpoint()}/delete-ramen/${id}`,
  }

  export const Route = {
    ...RamenContextBack
  }

export default Api;


