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
import fi.metatavu.linkedevents.client.model.Keyword;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;


@com.fasterxml.jackson.annotation.JsonIgnoreProperties(ignoreUnknown = true)
/**
 * Keyword sets are used to group keywords together into classification groups. For example, one set of keywords might describe themes used by an event provider and another could be used to describe audience groups.
 */
@ApiModel(description = "Keyword sets are used to group keywords together into classification groups. For example, one set of keywords might describe themes used by an event provider and another could be used to describe audience groups.")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2018-05-08T15:59:23.925+03:00")
public class KeywordSet {
  @JsonProperty("id")
  private String id = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("origin_id")
  private String originId = null;

  @JsonProperty("created_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime = null;

  @JsonProperty("last_modified_time")
  private @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime = null;

  @JsonProperty("data_source")
  private String dataSource = null;

  @JsonProperty("last_modified_by")
  private String lastModifiedBy = null;

  /**
   * Usage type for this keyword_set. These are allow UIs to show the set in appropriate place. FIXME: set of types is not finalized by any stretch
   */
  public enum UsageEnum {
    ANY("any"),
    
    KEYWORD("keyword"),
    
    AUDIENCE("audience");

    private String value;

    UsageEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static UsageEnum fromValue(String text) {
      for (UsageEnum b : UsageEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }

  @JsonProperty("usage")
  private UsageEnum usage = null;

  @JsonProperty("organization")
  private String organization = null;

  @JsonProperty("keywords")
  private List<Keyword> keywords = new ArrayList<Keyword>();

  public KeywordSet id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Unique identifier for this keyword_set. These should be URIs identifying the source and the keyword_set itself, and preferably also well formed http-URLs pointing to more information about the keyword.
   * @return id
  **/
  @ApiModelProperty(required = true, value = "Unique identifier for this keyword_set. These should be URIs identifying the source and the keyword_set itself, and preferably also well formed http-URLs pointing to more information about the keyword.")
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public KeywordSet name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name for this keyword_set. This should be human readable, such that it could be shown as label in UI
   * @return name
  **/
  @ApiModelProperty(required = true, value = "Name for this keyword_set. This should be human readable, such that it could be shown as label in UI")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public KeywordSet originId(String originId) {
    this.originId = originId;
    return this;
  }

   /**
   * Set identifier in the originating system, if any
   * @return originId
  **/
  @ApiModelProperty(value = "Set identifier in the originating system, if any")
  public String getOriginId() {
    return originId;
  }

  public void setOriginId(String originId) {
    this.originId = originId;
  }

  public KeywordSet createdTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime) {
    this.createdTime = createdTime;
    return this;
  }

   /**
   * Time when this keyword_set was created (ISO 8601)
   * @return createdTime
  **/
  @ApiModelProperty(value = "Time when this keyword_set was created (ISO 8601)")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getCreatedTime() {
    return createdTime;
  }

  public void setCreatedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor createdTime) {
    this.createdTime = createdTime;
  }

  public KeywordSet lastModifiedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime) {
    this.lastModifiedTime = lastModifiedTime;
    return this;
  }

   /**
   * Time when this keyword_set was last modified (ISO 8601)
   * @return lastModifiedTime
  **/
  @ApiModelProperty(value = "Time when this keyword_set was last modified (ISO 8601)")
  public @com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor getLastModifiedTime() {
    return lastModifiedTime;
  }

  public void setLastModifiedTime(@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = fi.metatavu.linkedevents.client.TemporalAccessorSerializer.class) @com.fasterxml.jackson.databind.annotation.JsonDeserialize(using = fi.metatavu.linkedevents.client.TemporalAccessorDeserializer.class) java.time.temporal.TemporalAccessor lastModifiedTime) {
    this.lastModifiedTime = lastModifiedTime;
  }

  public KeywordSet dataSource(String dataSource) {
    this.dataSource = dataSource;
    return this;
  }

   /**
   * Unique identifier (URI)for the system where this keyword_set originated, if any
   * @return dataSource
  **/
  @ApiModelProperty(value = "Unique identifier (URI)for the system where this keyword_set originated, if any")
  public String getDataSource() {
    return dataSource;
  }

  public void setDataSource(String dataSource) {
    this.dataSource = dataSource;
  }

  public KeywordSet lastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
    return this;
  }

   /**
   * FIXME(verify) Which API user most recently edited this keyword
   * @return lastModifiedBy
  **/
  @ApiModelProperty(value = "FIXME(verify) Which API user most recently edited this keyword")
  public String getLastModifiedBy() {
    return lastModifiedBy;
  }

  public void setLastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
  }

  public KeywordSet usage(UsageEnum usage) {
    this.usage = usage;
    return this;
  }

   /**
   * Usage type for this keyword_set. These are allow UIs to show the set in appropriate place. FIXME: set of types is not finalized by any stretch
   * @return usage
  **/
  @ApiModelProperty(value = "Usage type for this keyword_set. These are allow UIs to show the set in appropriate place. FIXME: set of types is not finalized by any stretch")
  public UsageEnum getUsage() {
    return usage;
  }

  public void setUsage(UsageEnum usage) {
    this.usage = usage;
  }

  public KeywordSet organization(String organization) {
    this.organization = organization;
    return this;
  }

   /**
   * Organization that has defined this keyword_set
   * @return organization
  **/
  @ApiModelProperty(value = "Organization that has defined this keyword_set")
  public String getOrganization() {
    return organization;
  }

  public void setOrganization(String organization) {
    this.organization = organization;
  }

  public KeywordSet keywords(List<Keyword> keywords) {
    this.keywords = keywords;
    return this;
  }

  public KeywordSet addKeywordsItem(Keyword keywordsItem) {
    this.keywords.add(keywordsItem);
    return this;
  }

   /**
   * Keywords that belong to this keyword_set
   * @return keywords
  **/
  @ApiModelProperty(required = true, value = "Keywords that belong to this keyword_set")
  public List<Keyword> getKeywords() {
    return keywords;
  }

  public void setKeywords(List<Keyword> keywords) {
    this.keywords = keywords;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    KeywordSet keywordSet = (KeywordSet) o;
    return Objects.equals(this.id, keywordSet.id) &&
        Objects.equals(this.name, keywordSet.name) &&
        Objects.equals(this.originId, keywordSet.originId) &&
        Objects.equals(this.createdTime, keywordSet.createdTime) &&
        Objects.equals(this.lastModifiedTime, keywordSet.lastModifiedTime) &&
        Objects.equals(this.dataSource, keywordSet.dataSource) &&
        Objects.equals(this.lastModifiedBy, keywordSet.lastModifiedBy) &&
        Objects.equals(this.usage, keywordSet.usage) &&
        Objects.equals(this.organization, keywordSet.organization) &&
        Objects.equals(this.keywords, keywordSet.keywords);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, originId, createdTime, lastModifiedTime, dataSource, lastModifiedBy, usage, organization, keywords);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class KeywordSet {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    originId: ").append(toIndentedString(originId)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    lastModifiedTime: ").append(toIndentedString(lastModifiedTime)).append("\n");
    sb.append("    dataSource: ").append(toIndentedString(dataSource)).append("\n");
    sb.append("    lastModifiedBy: ").append(toIndentedString(lastModifiedBy)).append("\n");
    sb.append("    usage: ").append(toIndentedString(usage)).append("\n");
    sb.append("    organization: ").append(toIndentedString(organization)).append("\n");
    sb.append("    keywords: ").append(toIndentedString(keywords)).append("\n");
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

