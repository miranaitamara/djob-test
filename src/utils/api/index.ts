const api = {
    getCollaboratorsData() {
        return fetch('/api/collaborators').then((res) => {
            return res.json();
        });
    },
    getTokensData() {
        return fetch('/api/tokens').then((res) => {
            return res.json();
        });
    },
};
export default api;
