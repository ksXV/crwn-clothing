import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shopdata/shopdata.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(CollectionsOverview);
