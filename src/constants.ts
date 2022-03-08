export const scope = `spark-admin%3Aresource_groups_read%20spark%3Aall%20spark-admin%3Aorganizations_write%20spark-admin%3Apeople_write%20spark-admin%3Aroles_read%20spark-admin%3Aorganizations_read%20spark%3Aorganizations_read%20spark%3Adevices_write%20spark%3Axapi_statuses%20spark-admin%3Aworkspaces_read%20spark-admin%3Aplaces_read%20spark%3Adevices_read%20spark-admin%3Aresource_group_memberships_read%20spark%3Axapi_commands%20spark-admin%3Aresource_group_memberships_write%20spark%3Akms%20spark-admin%3Adevices_read%20spark-admin%3Aplaces_write%20spark-admin%3Adevices_write%20spark-admin%3Apeople_read`;
export const redirect_uri = 'https://webexpresence.ngrok.io/auth';
export const client_id = process.env.CLIENT_ID;
export const auth_url = "https://webexapis.com/v1/access_token";
export const client_secret = process.env.CLIENT_SECRET;
export const login_url = `https://webexapis.com/v1/authorize?client_id=${client_id}&response_type=code&redirect_uri=https%3A%2F%2Fwebexpresence.ngrok.io%2Fauth&scope=${scope}`;
export const server_url = process.env.NODE_ENV === 'development' ? "https://webexpresencedevice.ngrok.io" : "https://presence-device.herokuapp.com";

