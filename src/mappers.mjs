function byUserMapper(payload) {
  return payload.data.xdt_api__v1__feed__timeline__connection.edges
    .map((e) => e.node.media)
    .filter((e) => !!e);
}

function timelineUsers(payload) {
  return payload.data.xdt_api__v1__feed__reels_media__connection.edges.map(
    (e) => e.node
  );
}

export { byUserMapper, timelineUsers };
