/*
 * Linked Events information API
 * Linked Events provides categorized data on events and places using JSON-LD format.  Events can be searched by date and location. Location can be exact address or larger area such as neighbourhood or borough  JSON-LD format is streamlined using include mechanism. API users can request that certain fields are included directly into the result, instead of being hyperlinks to objects.  Several fields are multilingual. These are implemented as object with each language variant as property. In this specification each multilingual field has (fi,sv,en) property triplet as example.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package fi.metatavu.linkedevents.client.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import fi.metatavu.linkedevents.client.model.Image;
import fi.metatavu.linkedevents.client.model.KeywordName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;


@com.fasterxml.jackson.annotation.JsonIgnoreProperties(ignoreUnknown = true)
/**
 * Keywords are used to describe events. Linked events uses namespaced keywords in order to support having events from different sources. Namespaces are needed because keywords are defined by the organization sourcing the events and can therefore overlap in meaning. Conversely the meaning of same keyword can vary between organizations. Organization sourcing the keyword can be identified by data_source field. Data_source field will later specify standardized namespaces as well.
 */
@ApiModel(description = "Keywords are used to describe events. Linked events uses namespaced keywords in order to support having events from different sources. Namespaces are needed because keywords are defined by the organization sourcing the events and can therefore overlap in meaning. Conversely the meaning of same keyword can vary between organizations. Organization sourcing the keyword can be identified by data_source field. Data_source field will later specify standardized namespaces as well.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-05-16T13:52:49.349+03:00")
public class Keyword {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("name")
  private KeywordName name = null;

  @JsonProperty("images")
  private List<Image> images = null;

  @JsonProperty("origin_id")
  private String originId = null;

  @JsonProperty("created_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime = null;

  @JsonProperty("last_modified_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime = null;

  @JsonProperty("aggregate")
  private Boolean aggregate = null;

  @JsonProperty("data_source")
  private String dataSource = null;

  @JsonProperty("created_by")
  private String createdBy = null;

  @JsonProperty("last_modified_by")
  private String lastModifiedBy = null;

  @JsonProperty("alt_labels")
  private List<String> altLabels = null;

  public Keyword id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Consists of source prefix and source specific identifier. These should be URIs uniquely identifying the keyword, and preferably also well formed http-URLs pointing to more information about the keyword.
   * @return id
  **/
  @ApiModelProperty(required = true, value = "Consists of source prefix and source specific identifier. These should be URIs uniquely identifying the keyword, and preferably also well formed http-URLs pointing to more information about the keyword.")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Keyword name(KeywordName name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public KeywordName getName() {
    return name;
  }

  public void setName(KeywordName name) {
    this.name = name;
  }

  public Keyword images(List<Image> images) {
    this.images = images;
    return this;
  }

  public Keyword addImagesItem(Image imagesItem) {
    if (this.images == null) {
      this.images = new ArrayList<Image>();
    }
    this.images.add(imagesItem);
    return this;
  }

   /**
   * Get images
   * @return images
  **/
  @ApiModelProperty(value = "")
  public List<Image> getImages() {
    return images;
  }

  public void setImages(List<Image> images) {
    this.images = images;
  }

  public Keyword originId(String originId) {
    this.originId = originId;
    return this;
  }

   /**
   * Identifier for the keyword in the organization using this keyword. For standardized namespaces this will be a shared identifier.
   * @return originId
  **/
  @ApiModelProperty(value = "Identifier for the keyword in the organization using this keyword. For standardized namespaces this will be a shared identifier.")
  public String getOriginId() {
    return originId;
  }

  public void setOriginId(String originId) {
    this.originId = originId;
  }

  public Keyword createdTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime) {
    this.createdTime = createdTime;
    return this;
  }

   /**
   * Creation time for the keyword entry.
   * @return createdTime
  **/
  @ApiModelProperty(value = "Creation time for the keyword entry.")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime) {
    this.createdTime = createdTime;
  }

  public Keyword lastModifiedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime) {
    this.lastModifiedTime = lastModifiedTime;
    return this;
  }

   /**
   * Time this place was modified in the datastore behind the API (not necessarily in the originating system)
   * @return lastModifiedTime
  **/
  @ApiModelProperty(value = "Time this place was modified in the datastore behind the API (not necessarily in the originating system)")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getLastModifiedTime() {
    return lastModifiedTime;
  }

  public void setLastModifiedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime) {
    this.lastModifiedTime = lastModifiedTime;
  }

  public Keyword aggregate(Boolean aggregate) {
    this.aggregate = aggregate;
    return this;
  }

   /**
   * FIXME(verify) This keyword is an combination of several keywords at source
   * @return aggregate
  **/
  @ApiModelProperty(value = "FIXME(verify) This keyword is an combination of several keywords at source")
  public Boolean getAggregate() {
    return aggregate;
  }

  public void setAggregate(Boolean aggregate) {
    this.aggregate = aggregate;
  }

  public Keyword dataSource(String dataSource) {
    this.dataSource = dataSource;
    return this;
  }

   /**
   * Source of the keyword, typically API provider specific identifier. Will also be used to specify standardized namespaces as they are brought into use.
   * @return dataSource
  **/
  @ApiModelProperty(required = true, value = "Source of the keyword, typically API provider specific identifier. Will also be used to specify standardized namespaces as they are brought into use.")
  public String getDataSource() {
    return dataSource;
  }

  public void setDataSource(String dataSource) {
    this.dataSource = dataSource;
  }

  public Keyword createdBy(String createdBy) {
    this.createdBy = createdBy;
    return this;
  }

   /**
   * FIXME(verify) URL reference to the user that created this record (user endpoint)
   * @return createdBy
  **/
  @ApiModelProperty(value = "FIXME(verify) URL reference to the user that created this record (user endpoint)")
  public String getCreatedBy() {
    return createdBy;
  }

  public void setCreatedBy(String createdBy) {
    this.createdBy = createdBy;
  }

  public Keyword lastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
    return this;
  }

   /**
   * FIXME(verify) URL reference to the user that last modfied this record (user endpoint)
   * @return lastModifiedBy
  **/
  @ApiModelProperty(value = "FIXME(verify) URL reference to the user that last modfied this record (user endpoint)")
  public String getLastModifiedBy() {
    return lastModifiedBy;
  }

  public void setLastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
  }

  public Keyword altLabels(List<String> altLabels) {
    this.altLabels = altLabels;
    return this;
  }

  public Keyword addAltLabelsItem(String altLabelsItem) {
    if (this.altLabels == null) {
      this.altLabels = new ArrayList<String>();
    }
    this.altLabels.add(altLabelsItem);
    return this;
  }

   /**
   * FIXME(verify) alternative labels for this keyword, no language specified. Use case?
   * @return altLabels
  **/
  @ApiModelProperty(value = "FIXME(verify) alternative labels for this keyword, no language specified. Use case?")
  public List<String> getAltLabels() {
    return altLabels;
  }

  public void setAltLabels(List<String> altLabels) {
    this.altLabels = altLabels;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Keyword keyword = (Keyword) o;
    return Objects.equals(this.id, keyword.id) &&
        Objects.equals(this.name, keyword.name) &&
        Objects.equals(this.images, keyword.images) &&
        Objects.equals(this.originId, keyword.originId) &&
        Objects.equals(this.createdTime, keyword.createdTime) &&
        Objects.equals(this.lastModifiedTime, keyword.lastModifiedTime) &&
        Objects.equals(this.aggregate, keyword.aggregate) &&
        Objects.equals(this.dataSource, keyword.dataSource) &&
        Objects.equals(this.createdBy, keyword.createdBy) &&
        Objects.equals(this.lastModifiedBy, keyword.lastModifiedBy) &&
        Objects.equals(this.altLabels, keyword.altLabels);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, images, originId, createdTime, lastModifiedTime, aggregate, dataSource, createdBy, lastModifiedBy, altLabels);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Keyword {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    images: ").append(toIndentedString(images)).append("\n");
    sb.append("    originId: ").append(toIndentedString(originId)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    lastModifiedTime: ").append(toIndentedString(lastModifiedTime)).append("\n");
    sb.append("    aggregate: ").append(toIndentedString(aggregate)).append("\n");
    sb.append("    dataSource: ").append(toIndentedString(dataSource)).append("\n");
    sb.append("    createdBy: ").append(toIndentedString(createdBy)).append("\n");
    sb.append("    lastModifiedBy: ").append(toIndentedString(lastModifiedBy)).append("\n");
    sb.append("    altLabels: ").append(toIndentedString(altLabels)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
  
}

