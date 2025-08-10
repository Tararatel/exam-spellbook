

// Roots API
export const rootsApi = {
  getAll: () => api.get('/roots'),
  getById: (id) => api.get(`/roots/${id}`),
  create: (data) => api.post('/roots', data),
  update: (id, data) => api.put(`/roots/${id}`, data),
  delete: (id) => api.delete(`/roots/${id}`),
};