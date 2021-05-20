export type Maybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown
  PrismicImageThumbnailsType: any
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>
  ne?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type ImgixUrlParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: Maybe<Scalars['String']>
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: Maybe<Scalars['String']>
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: Maybe<Scalars['String']>
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: Maybe<Scalars['String']>
  /** Alias for `blendAlign`. */
  blendalign?: Maybe<Scalars['String']>
  /** Alias for `blendAlign`. */
  ba?: Maybe<Scalars['String']>
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: Maybe<Scalars['Int']>
  /** Alias for `blendAlpha`. */
  blendalpha?: Maybe<Scalars['Int']>
  /** Alias for `blendAlpha`. */
  balph?: Maybe<Scalars['Int']>
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: Maybe<Scalars['String']>
  /** Alias for `blendColor`. */
  blendcolor?: Maybe<Scalars['String']>
  /** Alias for `blendColor`. */
  blendClr?: Maybe<Scalars['String']>
  /** Alias for `blendColor`. */
  blendclr?: Maybe<Scalars['String']>
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: Maybe<Scalars['String']>
  /** Alias for `blendCrop`. */
  blendcrop?: Maybe<Scalars['String']>
  /** Alias for `blendCrop`. */
  bc?: Maybe<Scalars['String']>
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: Maybe<Scalars['String']>
  /** Alias for `blendFit`. */
  blendfit?: Maybe<Scalars['String']>
  /** Alias for `blendFit`. */
  bf?: Maybe<Scalars['String']>
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: Maybe<Scalars['Int']>
  /** Alias for `blendH`. */
  blendh?: Maybe<Scalars['Int']>
  /** Alias for `blendH`. */
  bh?: Maybe<Scalars['Int']>
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: Maybe<Scalars['String']>
  /** Alias for `blendMode`. */
  blendmode?: Maybe<Scalars['String']>
  /** Alias for `blendMode`. */
  bm?: Maybe<Scalars['String']>
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: Maybe<Scalars['Int']>
  /** Alias for `blendPad`. */
  blendpad?: Maybe<Scalars['Int']>
  /** Alias for `blendPad`. */
  bp?: Maybe<Scalars['Int']>
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: Maybe<Scalars['String']>
  /** Alias for `blendSize`. */
  blendsize?: Maybe<Scalars['String']>
  /** Alias for `blendSize`. */
  bs?: Maybe<Scalars['String']>
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: Maybe<Scalars['Int']>
  /** Alias for `blendW`. */
  blendw?: Maybe<Scalars['Int']>
  /** Alias for `blendW`. */
  bw?: Maybe<Scalars['Int']>
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: Maybe<Scalars['Int']>
  /** Alias for `blendX`. */
  blendx?: Maybe<Scalars['Int']>
  /** Alias for `blendX`. */
  bx?: Maybe<Scalars['Int']>
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: Maybe<Scalars['Int']>
  /** Alias for `blendY`. */
  blendy?: Maybe<Scalars['Int']>
  /** Alias for `blendY`. */
  by?: Maybe<Scalars['Int']>
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: Maybe<Scalars['String']>
  /** Alias for `blend`. */
  b?: Maybe<Scalars['String']>
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: Maybe<Scalars['Int']>
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: Maybe<Scalars['Int']>
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: Maybe<Scalars['Int']>
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: Maybe<Scalars['String']>
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: Maybe<Scalars['String']>
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: Maybe<Scalars['Int']>
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: Maybe<Scalars['Int']>
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: Maybe<Scalars['String']>
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: Maybe<Scalars['Int']>
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: Maybe<Scalars['String']>
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: Maybe<Scalars['Int']>
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: Maybe<Scalars['Int']>
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: Maybe<Scalars['Int']>
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: Maybe<Scalars['Int']>
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: Maybe<Scalars['String']>
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: Maybe<Scalars['String']>
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: Maybe<Scalars['String']>
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: Maybe<Scalars['String']>
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: Maybe<Scalars['Int']>
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: Maybe<Scalars['Float']>
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: Maybe<Scalars['Int']>
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: Maybe<Scalars['String']>
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: Maybe<Scalars['Int']>
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: Maybe<Scalars['String']>
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: Maybe<Scalars['Int']>
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: Maybe<Scalars['Float']>
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: Maybe<Scalars['Int']>
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: Maybe<Scalars['String']>
  /** Alias for `fillColor`. */
  fillcolor?: Maybe<Scalars['String']>
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: Maybe<Scalars['String']>
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: Maybe<Scalars['String']>
  /** Alias for `fit`. */
  f?: Maybe<Scalars['String']>
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: Maybe<Scalars['String']>
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: Maybe<Scalars['String']>
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: Maybe<Scalars['Boolean']>
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: Maybe<Scalars['Int']>
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: Maybe<Scalars['Int']>
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: Maybe<Scalars['Float']>
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: Maybe<Scalars['Int']>
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: Maybe<Scalars['String']>
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: Maybe<Scalars['Int']>
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: Maybe<Scalars['Int']>
  /** Alias for `h`. */
  height?: Maybe<Scalars['Int']>
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: Maybe<Scalars['Int']>
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: Maybe<Scalars['Int']>
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: Maybe<Scalars['Int']>
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: Maybe<Scalars['Boolean']>
  /** Alias for `invert`. */
  inv?: Maybe<Scalars['Boolean']>
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: Maybe<Scalars['Boolean']>
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: Maybe<Scalars['String']>
  /** Alias for `markAlign`. */
  ma?: Maybe<Scalars['String']>
  /** Alias for `markAlign`. */
  markalign?: Maybe<Scalars['String']>
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: Maybe<Scalars['Int']>
  /** Alias for `markAlpha`. */
  markalpha?: Maybe<Scalars['Int']>
  /** Alias for `markAlpha`. */
  malph?: Maybe<Scalars['Int']>
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: Maybe<Scalars['String']>
  /** Alias for `markBase`. */
  mb?: Maybe<Scalars['String']>
  /** Alias for `markBase`. */
  markbase?: Maybe<Scalars['String']>
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: Maybe<Scalars['String']>
  /** Alias for `markFit`. */
  mf?: Maybe<Scalars['String']>
  /** Alias for `markFit`. */
  markfit?: Maybe<Scalars['String']>
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: Maybe<Scalars['Int']>
  /** Alias for `markH`. */
  mh?: Maybe<Scalars['Int']>
  /** Alias for `markH`. */
  markh?: Maybe<Scalars['Int']>
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: Maybe<Scalars['Int']>
  /** Alias for `markPad`. */
  mp?: Maybe<Scalars['Int']>
  /** Alias for `markPad`. */
  markpad?: Maybe<Scalars['Int']>
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: Maybe<Scalars['Float']>
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: Maybe<Scalars['Int']>
  /** Alias for `markScale`. */
  ms?: Maybe<Scalars['Int']>
  /** Alias for `markScale`. */
  markscale?: Maybe<Scalars['Int']>
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: Maybe<Scalars['String']>
  /** Alias for `markTile`. */
  mtile?: Maybe<Scalars['String']>
  /** Alias for `markTile`. */
  marktile?: Maybe<Scalars['String']>
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: Maybe<Scalars['Int']>
  /** Alias for `markW`. */
  mw?: Maybe<Scalars['Int']>
  /** Alias for `markW`. */
  markw?: Maybe<Scalars['Int']>
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: Maybe<Scalars['Int']>
  /** Alias for `markX`. */
  mx?: Maybe<Scalars['Int']>
  /** Alias for `markX`. */
  markx?: Maybe<Scalars['Int']>
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: Maybe<Scalars['Int']>
  /** Alias for `markY`. */
  my?: Maybe<Scalars['Int']>
  /** Alias for `markY`. */
  marky?: Maybe<Scalars['Int']>
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: Maybe<Scalars['String']>
  /** Alias for `mark`. */
  m?: Maybe<Scalars['String']>
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: Maybe<Scalars['String']>
  /** Alias for `maskBg`. */
  maskbg?: Maybe<Scalars['String']>
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: Maybe<Scalars['String']>
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: Maybe<Scalars['Int']>
  /** Alias for `maxH`. */
  maxHeight?: Maybe<Scalars['Int']>
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: Maybe<Scalars['Int']>
  /** Alias for `maxW`. */
  maxWidth?: Maybe<Scalars['Int']>
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: Maybe<Scalars['Int']>
  /** Alias for `minH`. */
  minHeight?: Maybe<Scalars['Int']>
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: Maybe<Scalars['Int']>
  /** Alias for `minW`. */
  minWidth?: Maybe<Scalars['Int']>
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: Maybe<Scalars['String']>
  /** Alias for `monochrome`. */
  mono?: Maybe<Scalars['String']>
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: Maybe<Scalars['Int']>
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: Maybe<Scalars['Int']>
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: Maybe<Scalars['Int']>
  /** Alias for `orient`. */
  or?: Maybe<Scalars['Int']>
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: Maybe<Scalars['Int']>
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: Maybe<Scalars['Int']>
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: Maybe<Scalars['Int']>
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: Maybe<Scalars['Int']>
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: Maybe<Scalars['Int']>
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: Maybe<Scalars['Int']>
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: Maybe<Scalars['String']>
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: Maybe<Scalars['Boolean']>
  /** Alias for `pdfAnnotation`. */
  annotation?: Maybe<Scalars['Boolean']>
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: Maybe<Scalars['String']>
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: Maybe<Scalars['Int']>
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: Maybe<Scalars['Int']>
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: Maybe<Scalars['String']>
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: Maybe<Scalars['Float']>
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: Maybe<Scalars['Int']>
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: Maybe<Scalars['Int']>
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: Maybe<Scalars['Float']>
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: Maybe<Scalars['Float']>
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: Maybe<Scalars['String']>
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: Maybe<Scalars['String']>
  /** Alias for `trimColor`. */
  trimcolor?: Maybe<Scalars['String']>
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: Maybe<Scalars['Float']>
  /** Alias for `trimMd`. */
  trimmd?: Maybe<Scalars['Float']>
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: Maybe<Scalars['Int']>
  /** Alias for `trimPad`. */
  trimpad?: Maybe<Scalars['Int']>
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: Maybe<Scalars['Float']>
  /** Alias for `trimSd`. */
  trimsd?: Maybe<Scalars['Float']>
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: Maybe<Scalars['Float']>
  /** Alias for `trimTol`. */
  trimtol?: Maybe<Scalars['Float']>
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: Maybe<Scalars['String']>
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: Maybe<Scalars['String']>
  /** Alias for `txtAlign`. */
  txtalign?: Maybe<Scalars['String']>
  /** Alias for `txtAlign`. */
  ta?: Maybe<Scalars['String']>
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: Maybe<Scalars['String']>
  /** Alias for `txtClip`. */
  txtclip?: Maybe<Scalars['String']>
  /** Alias for `txtClip`. */
  tcl?: Maybe<Scalars['String']>
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  txtcolor?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  txtClr?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  txtclr?: Maybe<Scalars['String']>
  /** Alias for `txtColor`. */
  tc?: Maybe<Scalars['String']>
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: Maybe<Scalars['String']>
  /** Alias for `txtFit`. */
  txtfit?: Maybe<Scalars['String']>
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: Maybe<Scalars['String']>
  /** Alias for `txtFont`. */
  tf?: Maybe<Scalars['String']>
  /** Alias for `txtFont`. */
  txtfont?: Maybe<Scalars['String']>
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: Maybe<Scalars['Int']>
  /** Alias for `txtLead`. */
  txtlead?: Maybe<Scalars['Int']>
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: Maybe<Scalars['Int']>
  /** Alias for `txtLig`. */
  txtlig?: Maybe<Scalars['Int']>
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: Maybe<Scalars['String']>
  /** Alias for `txtLineColor`. */
  txtlinecolor?: Maybe<Scalars['String']>
  /** Alias for `txtLineColor`. */
  txtLineClr?: Maybe<Scalars['String']>
  /** Alias for `txtLineColor`. */
  txtlineclr?: Maybe<Scalars['String']>
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: Maybe<Scalars['Int']>
  /** Alias for `txtLine`. */
  txtline?: Maybe<Scalars['Int']>
  /** Alias for `txtLine`. */
  tl?: Maybe<Scalars['Int']>
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: Maybe<Scalars['Int']>
  /** Alias for `txtPad`. */
  txtpad?: Maybe<Scalars['Int']>
  /** Alias for `txtPad`. */
  tp?: Maybe<Scalars['Int']>
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: Maybe<Scalars['Float']>
  /** Alias for `txtShad`. */
  txtshad?: Maybe<Scalars['Float']>
  /** Alias for `txtShad`. */
  tsh?: Maybe<Scalars['Float']>
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: Maybe<Scalars['Int']>
  /** Alias for `txtSize`. */
  tsz?: Maybe<Scalars['Int']>
  /** Alias for `txtSize`. */
  txtsize?: Maybe<Scalars['Int']>
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: Maybe<Scalars['Int']>
  /** Alias for `txtTrack`. */
  txttrack?: Maybe<Scalars['Int']>
  /** Alias for `txtTrack`. */
  tt?: Maybe<Scalars['Int']>
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: Maybe<Scalars['Int']>
  /** Alias for `txtWidth`. */
  txtwidth?: Maybe<Scalars['Int']>
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: Maybe<Scalars['String']>
  /** Alias for `txt`. */
  t?: Maybe<Scalars['String']>
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: Maybe<Scalars['Int']>
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: Maybe<Scalars['Float']>
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: Maybe<Scalars['Int']>
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: Maybe<Scalars['Int']>
  /** Alias for `w`. */
  width?: Maybe<Scalars['Int']>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type PrismicAllDocumentTypes =
  | PrismicPage
  | PrismicNavigation
  | PrismicPerson
  | PrismicSettings

export type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  dataRaw: Scalars['JSON']
  /**
   * The document's data object without transformations. The object is stringified via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  dataString?: Maybe<Scalars['String']>
  /** The document's initial publication date. */
  first_publication_date?: Maybe<Scalars['Date']>
  /** The document's Prismic API URL. */
  href?: Maybe<Scalars['String']>
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  id: Scalars['ID']
  /** The document's language. */
  lang: Scalars['String']
  /** The document's most recent publication date */
  last_publication_date?: Maybe<Scalars['Date']>
  /** The document's list of tags. */
  tags: Array<Scalars['String']>
  /** Alternate languages for the document. */
  alternate_languages: Array<PrismicLinkType>
  /** The document's Prismic API ID type. */
  type: Scalars['String']
  /** The document's Prismic ID. */
  prismicId: Scalars['ID']
  /** Marks the document as previewable using Prismic's preview system. Include this field if updates to the document should be previewable by content editors before publishing. **Note: the value of this field is not stable and should not be used directly**. */
  _previewable: Scalars['ID']
}

export type PrismicDocumentFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicDocumentLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  /** The ID of the resource author. Fetched via oEmbed data. */
  author_id?: Maybe<Scalars['ID']>
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>
  /** The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. Fetched via oEmbed data. */
  cache_age?: Maybe<Scalars['String']>
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>
  /** The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. Fetched via oEmbed data. */
  html?: Maybe<Scalars['String']>
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>
  /** The source URL of the resource. Fetched via oEmbed data. */
  url?: Maybe<Scalars['String']>
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  width?: Maybe<Scalars['Int']>
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  height?: Maybe<Scalars['Int']>
  /** The ID of the resource media. Fetched via oEmbed data. */
  media_id?: Maybe<Scalars['ID']>
  /** A description for the resource. */
  description?: Maybe<Scalars['String']>
  /** The ID of a video. */
  video_id?: Maybe<Scalars['ID']>
}

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>
}

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  /** Width of the image in pixels. */
  width: Scalars['Int']
  /** Height of the image in pixels. */
  height: Scalars['Int']
}

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type PrismicImageFixedType = {
  base64: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Scalars['String']
  srcSetWebp: Scalars['String']
  sizes: Scalars['String']
  width: Scalars['Int']
  height: Scalars['Int']
}

export type PrismicImageFixedTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type PrismicImageFluidType = {
  base64: Scalars['String']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Scalars['String']
  srcSetWebp: Scalars['String']
  sizes: Scalars['String']
  aspectRatio: Scalars['Float']
}

export type PrismicImageFluidTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type PrismicImageInterface = {
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>
  /** The image's dimensions. */
  dimensions?: Maybe<PrismicImageDimensionsType>
  /** The image's URL on Prismic's CDN. */
  url?: Maybe<Scalars['String']>
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>
  fixed?: Maybe<PrismicImageFixedType>
  fluid?: Maybe<PrismicImageFluidType>
}

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  url?: Maybe<Scalars['String']>
  fixed?: Maybe<PrismicImageFixedType>
  fluid?: Maybe<PrismicImageFluidType>
  localFile?: Maybe<File>
}

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>
}

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixUrlParamsInput>
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>
}

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  imgixParams?: Maybe<ImgixUrlParamsInput>
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>
}

export type PrismicImageThumbnailsTypeQueryOperatorInput = {
  eq?: Maybe<Scalars['PrismicImageThumbnailsType']>
  ne?: Maybe<Scalars['PrismicImageThumbnailsType']>
  in?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>
  nin?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>
}

/** An image field with optional constrained thumbnails. */
export type PrismicImageType = PrismicImageInterface & {
  alt?: Maybe<Scalars['String']>
  copyright?: Maybe<Scalars['String']>
  dimensions?: Maybe<PrismicImageDimensionsType>
  url?: Maybe<Scalars['String']>
  fixed?: Maybe<PrismicImageFixedType>
  fluid?: Maybe<PrismicImageFluidType>
  localFile?: Maybe<File>
  thumbnails?: Maybe<Scalars['PrismicImageThumbnailsType']>
}

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>
}

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  imgixParams?: Maybe<ImgixUrlParamsInput>
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>
}

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  imgixParams?: Maybe<ImgixUrlParamsInput>
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>
}

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>
  copyright?: Maybe<StringQueryOperatorInput>
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>
  url?: Maybe<StringQueryOperatorInput>
  fixed?: Maybe<PrismicImageFixedTypeFilterInput>
  fluid?: Maybe<PrismicImageFluidTypeFilterInput>
  localFile?: Maybe<FileFilterInput>
  thumbnails?: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>
}

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  /** The type of link. */
  link_type: PrismicLinkTypes
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>
  /** The link's target. */
  target?: Maybe<Scalars['String']>
  /** If a Media link, the size of the file. */
  size?: Maybe<Scalars['Int']>
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>
}

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypesQueryOperatorInput>
  isBroken?: Maybe<BooleanQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  target?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  id?: Maybe<IdQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  raw?: Maybe<JsonQueryOperatorInput>
}

export type PrismicLinkTypeFilterListInput = {
  elemMatch?: Maybe<PrismicLinkTypeFilterInput>
}

/** Types of links. */
export enum PrismicLinkTypes {
  /** Any of the other types */
  Any = 'Any',
  /** Internal content */
  Document = 'Document',
  /** Internal media content */
  Media = 'Media',
  /** URL */
  Web = 'Web',
}

export type PrismicLinkTypesQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypes>
  ne?: Maybe<PrismicLinkTypes>
  in?: Maybe<Array<Maybe<PrismicLinkTypes>>>
  nin?: Maybe<Array<Maybe<PrismicLinkTypes>>>
}

export type PrismicNavigation = PrismicDocument &
  Node & {
    data?: Maybe<PrismicNavigationDataType>
    dataRaw: Scalars['JSON']
    dataString: Scalars['String']
    first_publication_date: Scalars['Date']
    href: Scalars['String']
    url?: Maybe<Scalars['String']>
    lang: Scalars['String']
    last_publication_date: Scalars['Date']
    tags: Array<Scalars['String']>
    alternate_languages: Array<PrismicLinkType>
    type: Scalars['String']
    prismicId: Scalars['ID']
    _previewable: Scalars['ID']
    uid?: Maybe<Scalars['String']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicNavigationFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNavigationLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicNavigationConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNavigationEdge>
  nodes: Array<PrismicNavigation>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicNavigationGroupConnection>
}

export type PrismicNavigationConnectionDistinctArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionMaxArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionMinArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionSumArgs = {
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicNavigationFieldsEnum
}

export type PrismicNavigationDataType = {
  title?: Maybe<PrismicStructuredTextType>
  nav_items?: Maybe<Array<Maybe<PrismicNavigationNavItemsGroupType>>>
}

export type PrismicNavigationDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
  nav_items?: Maybe<PrismicNavigationNavItemsGroupTypeFilterListInput>
}

export type PrismicNavigationEdge = {
  next?: Maybe<PrismicNavigation>
  node: PrismicNavigation
  previous?: Maybe<PrismicNavigation>
}

export enum PrismicNavigationFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataNavItems = 'data___nav_items',
  DataNavItemsLabelHtml = 'data___nav_items___label___html',
  DataNavItemsLabelText = 'data___nav_items___label___text',
  DataNavItemsLabelRaw = 'data___nav_items___label___raw',
  DataNavItemsLinkLinkType = 'data___nav_items___link___link_type',
  DataNavItemsLinkIsBroken = 'data___nav_items___link___isBroken',
  DataNavItemsLinkUrl = 'data___nav_items___link___url',
  DataNavItemsLinkTarget = 'data___nav_items___link___target',
  DataNavItemsLinkSize = 'data___nav_items___link___size',
  DataNavItemsLinkId = 'data___nav_items___link___id',
  DataNavItemsLinkType = 'data___nav_items___link___type',
  DataNavItemsLinkTags = 'data___nav_items___link___tags',
  DataNavItemsLinkLang = 'data___nav_items___link___lang',
  DataNavItemsLinkSlug = 'data___nav_items___link___slug',
  DataNavItemsLinkUid = 'data___nav_items___link___uid',
  DataNavItemsLinkRaw = 'data___nav_items___link___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicNavigationFilterInput = {
  data?: Maybe<PrismicNavigationDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicNavigationGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicNavigationEdge>
  nodes: Array<PrismicNavigation>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicNavigationNavItemsGroupType = {
  label?: Maybe<PrismicStructuredTextType>
  link?: Maybe<PrismicLinkType>
}

export type PrismicNavigationNavItemsGroupTypeFilterInput = {
  label?: Maybe<PrismicStructuredTextTypeFilterInput>
  link?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicNavigationNavItemsGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicNavigationNavItemsGroupTypeFilterInput>
}

export type PrismicNavigationSortInput = {
  fields?: Maybe<Array<Maybe<PrismicNavigationFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPage = PrismicDocument &
  Node & {
    data?: Maybe<PrismicPageDataType>
    dataRaw: Scalars['JSON']
    dataString: Scalars['String']
    first_publication_date: Scalars['Date']
    href: Scalars['String']
    url?: Maybe<Scalars['String']>
    lang: Scalars['String']
    last_publication_date: Scalars['Date']
    tags: Array<Scalars['String']>
    alternate_languages: Array<PrismicLinkType>
    type: Scalars['String']
    prismicId: Scalars['ID']
    _previewable: Scalars['ID']
    uid?: Maybe<Scalars['String']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicPageBodyAnchor = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyAnchorPrimaryType>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyAnchorConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyAnchorEdge>
  nodes: Array<PrismicPageBodyAnchor>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyAnchorGroupConnection>
}

export type PrismicPageBodyAnchorConnectionDistinctArgs = {
  field: PrismicPageBodyAnchorFieldsEnum
}

export type PrismicPageBodyAnchorConnectionMaxArgs = {
  field: PrismicPageBodyAnchorFieldsEnum
}

export type PrismicPageBodyAnchorConnectionMinArgs = {
  field: PrismicPageBodyAnchorFieldsEnum
}

export type PrismicPageBodyAnchorConnectionSumArgs = {
  field: PrismicPageBodyAnchorFieldsEnum
}

export type PrismicPageBodyAnchorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyAnchorFieldsEnum
}

export type PrismicPageBodyAnchorEdge = {
  next?: Maybe<PrismicPageBodyAnchor>
  node: PrismicPageBodyAnchor
  previous?: Maybe<PrismicPageBodyAnchor>
}

export enum PrismicPageBodyAnchorFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryAnchor = 'primary___anchor',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyAnchorFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyAnchorPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyAnchorGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyAnchorEdge>
  nodes: Array<PrismicPageBodyAnchor>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyAnchorPrimaryType = {
  anchor?: Maybe<Scalars['String']>
}

export type PrismicPageBodyAnchorPrimaryTypeFilterInput = {
  anchor?: Maybe<StringQueryOperatorInput>
}

export type PrismicPageBodyAnchorSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyAnchorFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageBodyCallToAction = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyCallToActionPrimaryType>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyCallToActionConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyCallToActionEdge>
  nodes: Array<PrismicPageBodyCallToAction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyCallToActionGroupConnection>
}

export type PrismicPageBodyCallToActionConnectionDistinctArgs = {
  field: PrismicPageBodyCallToActionFieldsEnum
}

export type PrismicPageBodyCallToActionConnectionMaxArgs = {
  field: PrismicPageBodyCallToActionFieldsEnum
}

export type PrismicPageBodyCallToActionConnectionMinArgs = {
  field: PrismicPageBodyCallToActionFieldsEnum
}

export type PrismicPageBodyCallToActionConnectionSumArgs = {
  field: PrismicPageBodyCallToActionFieldsEnum
}

export type PrismicPageBodyCallToActionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyCallToActionFieldsEnum
}

export type PrismicPageBodyCallToActionEdge = {
  next?: Maybe<PrismicPageBodyCallToAction>
  node: PrismicPageBodyCallToAction
  previous?: Maybe<PrismicPageBodyCallToAction>
}

export enum PrismicPageBodyCallToActionFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimarySubheadingHtml = 'primary___subheading___html',
  PrimarySubheadingText = 'primary___subheading___text',
  PrimarySubheadingRaw = 'primary___subheading___raw',
  PrimaryHeadingHtml = 'primary___heading___html',
  PrimaryHeadingText = 'primary___heading___text',
  PrimaryHeadingRaw = 'primary___heading___raw',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyCallToActionFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyCallToActionPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyCallToActionGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyCallToActionEdge>
  nodes: Array<PrismicPageBodyCallToAction>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyCallToActionPrimaryType = {
  subheading?: Maybe<PrismicStructuredTextType>
  heading?: Maybe<PrismicStructuredTextType>
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageBodyCallToActionPrimaryTypeFilterInput = {
  subheading?: Maybe<PrismicStructuredTextTypeFilterInput>
  heading?: Maybe<PrismicStructuredTextTypeFilterInput>
  text?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageBodyCallToActionSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyCallToActionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageBodyCenteredText = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyCenteredTextPrimaryType>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyCenteredTextConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyCenteredTextEdge>
  nodes: Array<PrismicPageBodyCenteredText>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyCenteredTextGroupConnection>
}

export type PrismicPageBodyCenteredTextConnectionDistinctArgs = {
  field: PrismicPageBodyCenteredTextFieldsEnum
}

export type PrismicPageBodyCenteredTextConnectionMaxArgs = {
  field: PrismicPageBodyCenteredTextFieldsEnum
}

export type PrismicPageBodyCenteredTextConnectionMinArgs = {
  field: PrismicPageBodyCenteredTextFieldsEnum
}

export type PrismicPageBodyCenteredTextConnectionSumArgs = {
  field: PrismicPageBodyCenteredTextFieldsEnum
}

export type PrismicPageBodyCenteredTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyCenteredTextFieldsEnum
}

export type PrismicPageBodyCenteredTextEdge = {
  next?: Maybe<PrismicPageBodyCenteredText>
  node: PrismicPageBodyCenteredText
  previous?: Maybe<PrismicPageBodyCenteredText>
}

export enum PrismicPageBodyCenteredTextFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTextHtml = 'primary___text___html',
  PrimaryTextText = 'primary___text___text',
  PrimaryTextRaw = 'primary___text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyCenteredTextFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyCenteredTextPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyCenteredTextGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyCenteredTextEdge>
  nodes: Array<PrismicPageBodyCenteredText>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyCenteredTextPrimaryType = {
  text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageBodyCenteredTextPrimaryTypeFilterInput = {
  text?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageBodyCenteredTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyCenteredTextFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageBodyPageIntro = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyPageIntroPrimaryType>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyPageIntroConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyPageIntroEdge>
  nodes: Array<PrismicPageBodyPageIntro>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyPageIntroGroupConnection>
}

export type PrismicPageBodyPageIntroConnectionDistinctArgs = {
  field: PrismicPageBodyPageIntroFieldsEnum
}

export type PrismicPageBodyPageIntroConnectionMaxArgs = {
  field: PrismicPageBodyPageIntroFieldsEnum
}

export type PrismicPageBodyPageIntroConnectionMinArgs = {
  field: PrismicPageBodyPageIntroFieldsEnum
}

export type PrismicPageBodyPageIntroConnectionSumArgs = {
  field: PrismicPageBodyPageIntroFieldsEnum
}

export type PrismicPageBodyPageIntroConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyPageIntroFieldsEnum
}

export type PrismicPageBodyPageIntroEdge = {
  next?: Maybe<PrismicPageBodyPageIntro>
  node: PrismicPageBodyPageIntro
  previous?: Maybe<PrismicPageBodyPageIntro>
}

export enum PrismicPageBodyPageIntroFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryHeadingHtml = 'primary___heading___html',
  PrimaryHeadingText = 'primary___heading___text',
  PrimaryHeadingRaw = 'primary___heading___raw',
  PrimaryNavigationLinkType = 'primary___navigation___link_type',
  PrimaryNavigationIsBroken = 'primary___navigation___isBroken',
  PrimaryNavigationUrl = 'primary___navigation___url',
  PrimaryNavigationTarget = 'primary___navigation___target',
  PrimaryNavigationSize = 'primary___navigation___size',
  PrimaryNavigationId = 'primary___navigation___id',
  PrimaryNavigationType = 'primary___navigation___type',
  PrimaryNavigationTags = 'primary___navigation___tags',
  PrimaryNavigationLang = 'primary___navigation___lang',
  PrimaryNavigationSlug = 'primary___navigation___slug',
  PrimaryNavigationUid = 'primary___navigation___uid',
  PrimaryNavigationRaw = 'primary___navigation___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyPageIntroFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyPageIntroPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyPageIntroGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyPageIntroEdge>
  nodes: Array<PrismicPageBodyPageIntro>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyPageIntroPrimaryType = {
  heading?: Maybe<PrismicStructuredTextType>
  navigation?: Maybe<PrismicLinkType>
}

export type PrismicPageBodyPageIntroPrimaryTypeFilterInput = {
  heading?: Maybe<PrismicStructuredTextTypeFilterInput>
  navigation?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicPageBodyPageIntroSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyPageIntroFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageBodySlicesType =
  | PrismicPageBodyTexturedImage
  | PrismicPageBodyPageIntro
  | PrismicPageBodyCenteredText
  | PrismicPageBodyTwoColumnText
  | PrismicPageBodyTextWithImage
  | PrismicPageBodyTeam
  | PrismicPageBodyCallToAction
  | PrismicPageBodyAnchor

export type PrismicPageBodyTeam = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyTeamPrimaryType>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyTeamConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTeamEdge>
  nodes: Array<PrismicPageBodyTeam>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyTeamGroupConnection>
}

export type PrismicPageBodyTeamConnectionDistinctArgs = {
  field: PrismicPageBodyTeamFieldsEnum
}

export type PrismicPageBodyTeamConnectionMaxArgs = {
  field: PrismicPageBodyTeamFieldsEnum
}

export type PrismicPageBodyTeamConnectionMinArgs = {
  field: PrismicPageBodyTeamFieldsEnum
}

export type PrismicPageBodyTeamConnectionSumArgs = {
  field: PrismicPageBodyTeamFieldsEnum
}

export type PrismicPageBodyTeamConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyTeamFieldsEnum
}

export type PrismicPageBodyTeamEdge = {
  next?: Maybe<PrismicPageBodyTeam>
  node: PrismicPageBodyTeam
  previous?: Maybe<PrismicPageBodyTeam>
}

export enum PrismicPageBodyTeamFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryDirectorsSubheadingHtml = 'primary___directors_subheading___html',
  PrimaryDirectorsSubheadingText = 'primary___directors_subheading___text',
  PrimaryDirectorsSubheadingRaw = 'primary___directors_subheading___raw',
  PrimaryDirectorsHeadingHtml = 'primary___directors_heading___html',
  PrimaryDirectorsHeadingText = 'primary___directors_heading___text',
  PrimaryDirectorsHeadingRaw = 'primary___directors_heading___raw',
  PrimaryStaffTeamHeadingHtml = 'primary___staff_team_heading___html',
  PrimaryStaffTeamHeadingText = 'primary___staff_team_heading___text',
  PrimaryStaffTeamHeadingRaw = 'primary___staff_team_heading___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyTeamFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTeamPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyTeamGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTeamEdge>
  nodes: Array<PrismicPageBodyTeam>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyTeamPrimaryType = {
  directors_subheading?: Maybe<PrismicStructuredTextType>
  directors_heading?: Maybe<PrismicStructuredTextType>
  staff_team_heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageBodyTeamPrimaryTypeFilterInput = {
  directors_subheading?: Maybe<PrismicStructuredTextTypeFilterInput>
  directors_heading?: Maybe<PrismicStructuredTextTypeFilterInput>
  staff_team_heading?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageBodyTeamSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyTeamFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageBodyTextWithImage = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyTextWithImagePrimaryType>
    items?: Maybe<Array<Maybe<PrismicPageBodyTextWithImageItemType>>>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyTextWithImageConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTextWithImageEdge>
  nodes: Array<PrismicPageBodyTextWithImage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyTextWithImageGroupConnection>
}

export type PrismicPageBodyTextWithImageConnectionDistinctArgs = {
  field: PrismicPageBodyTextWithImageFieldsEnum
}

export type PrismicPageBodyTextWithImageConnectionMaxArgs = {
  field: PrismicPageBodyTextWithImageFieldsEnum
}

export type PrismicPageBodyTextWithImageConnectionMinArgs = {
  field: PrismicPageBodyTextWithImageFieldsEnum
}

export type PrismicPageBodyTextWithImageConnectionSumArgs = {
  field: PrismicPageBodyTextWithImageFieldsEnum
}

export type PrismicPageBodyTextWithImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyTextWithImageFieldsEnum
}

export type PrismicPageBodyTextWithImageEdge = {
  next?: Maybe<PrismicPageBodyTextWithImage>
  node: PrismicPageBodyTextWithImage
  previous?: Maybe<PrismicPageBodyTextWithImage>
}

export enum PrismicPageBodyTextWithImageFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimarySubheadingHtml = 'primary___subheading___html',
  PrimarySubheadingText = 'primary___subheading___text',
  PrimarySubheadingRaw = 'primary___subheading___raw',
  PrimaryHeadingHtml = 'primary___heading___html',
  PrimaryHeadingText = 'primary___heading___text',
  PrimaryHeadingRaw = 'primary___heading___raw',
  Items = 'items',
  ItemsImageAlt = 'items___image___alt',
  ItemsImageCopyright = 'items___image___copyright',
  ItemsImageDimensionsWidth = 'items___image___dimensions___width',
  ItemsImageDimensionsHeight = 'items___image___dimensions___height',
  ItemsImageUrl = 'items___image___url',
  ItemsImageFixedBase64 = 'items___image___fixed___base64',
  ItemsImageFixedSrc = 'items___image___fixed___src',
  ItemsImageFixedSrcSet = 'items___image___fixed___srcSet',
  ItemsImageFixedSrcWebp = 'items___image___fixed___srcWebp',
  ItemsImageFixedSrcSetWebp = 'items___image___fixed___srcSetWebp',
  ItemsImageFixedSizes = 'items___image___fixed___sizes',
  ItemsImageFixedWidth = 'items___image___fixed___width',
  ItemsImageFixedHeight = 'items___image___fixed___height',
  ItemsImageFluidBase64 = 'items___image___fluid___base64',
  ItemsImageFluidSrc = 'items___image___fluid___src',
  ItemsImageFluidSrcSet = 'items___image___fluid___srcSet',
  ItemsImageFluidSrcWebp = 'items___image___fluid___srcWebp',
  ItemsImageFluidSrcSetWebp = 'items___image___fluid___srcSetWebp',
  ItemsImageFluidSizes = 'items___image___fluid___sizes',
  ItemsImageFluidAspectRatio = 'items___image___fluid___aspectRatio',
  ItemsImageLocalFileSourceInstanceName = 'items___image___localFile___sourceInstanceName',
  ItemsImageLocalFileAbsolutePath = 'items___image___localFile___absolutePath',
  ItemsImageLocalFileRelativePath = 'items___image___localFile___relativePath',
  ItemsImageLocalFileExtension = 'items___image___localFile___extension',
  ItemsImageLocalFileSize = 'items___image___localFile___size',
  ItemsImageLocalFilePrettySize = 'items___image___localFile___prettySize',
  ItemsImageLocalFileModifiedTime = 'items___image___localFile___modifiedTime',
  ItemsImageLocalFileAccessTime = 'items___image___localFile___accessTime',
  ItemsImageLocalFileChangeTime = 'items___image___localFile___changeTime',
  ItemsImageLocalFileBirthTime = 'items___image___localFile___birthTime',
  ItemsImageLocalFileRoot = 'items___image___localFile___root',
  ItemsImageLocalFileDir = 'items___image___localFile___dir',
  ItemsImageLocalFileBase = 'items___image___localFile___base',
  ItemsImageLocalFileExt = 'items___image___localFile___ext',
  ItemsImageLocalFileName = 'items___image___localFile___name',
  ItemsImageLocalFileRelativeDirectory = 'items___image___localFile___relativeDirectory',
  ItemsImageLocalFileDev = 'items___image___localFile___dev',
  ItemsImageLocalFileMode = 'items___image___localFile___mode',
  ItemsImageLocalFileNlink = 'items___image___localFile___nlink',
  ItemsImageLocalFileUid = 'items___image___localFile___uid',
  ItemsImageLocalFileGid = 'items___image___localFile___gid',
  ItemsImageLocalFileRdev = 'items___image___localFile___rdev',
  ItemsImageLocalFileIno = 'items___image___localFile___ino',
  ItemsImageLocalFileAtimeMs = 'items___image___localFile___atimeMs',
  ItemsImageLocalFileMtimeMs = 'items___image___localFile___mtimeMs',
  ItemsImageLocalFileCtimeMs = 'items___image___localFile___ctimeMs',
  ItemsImageLocalFileAtime = 'items___image___localFile___atime',
  ItemsImageLocalFileMtime = 'items___image___localFile___mtime',
  ItemsImageLocalFileCtime = 'items___image___localFile___ctime',
  ItemsImageLocalFileBirthtime = 'items___image___localFile___birthtime',
  ItemsImageLocalFileBirthtimeMs = 'items___image___localFile___birthtimeMs',
  ItemsImageLocalFileId = 'items___image___localFile___id',
  ItemsImageLocalFileChildren = 'items___image___localFile___children',
  ItemsImageThumbnails = 'items___image___thumbnails',
  ItemsTextHtml = 'items___text___html',
  ItemsTextText = 'items___text___text',
  ItemsTextRaw = 'items___text___raw',
  ItemsButtonTextHtml = 'items___button_text___html',
  ItemsButtonTextText = 'items___button_text___text',
  ItemsButtonTextRaw = 'items___button_text___raw',
  ItemsButtonLinkLinkType = 'items___button_link___link_type',
  ItemsButtonLinkIsBroken = 'items___button_link___isBroken',
  ItemsButtonLinkUrl = 'items___button_link___url',
  ItemsButtonLinkTarget = 'items___button_link___target',
  ItemsButtonLinkSize = 'items___button_link___size',
  ItemsButtonLinkId = 'items___button_link___id',
  ItemsButtonLinkType = 'items___button_link___type',
  ItemsButtonLinkTags = 'items___button_link___tags',
  ItemsButtonLinkLang = 'items___button_link___lang',
  ItemsButtonLinkSlug = 'items___button_link___slug',
  ItemsButtonLinkUid = 'items___button_link___uid',
  ItemsButtonLinkRaw = 'items___button_link___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyTextWithImageFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTextWithImagePrimaryTypeFilterInput>
  items?: Maybe<PrismicPageBodyTextWithImageItemTypeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyTextWithImageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTextWithImageEdge>
  nodes: Array<PrismicPageBodyTextWithImage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyTextWithImageItemType = {
  image?: Maybe<PrismicImageType>
  text?: Maybe<PrismicStructuredTextType>
  button_text?: Maybe<PrismicStructuredTextType>
  button_link?: Maybe<PrismicLinkType>
}

export type PrismicPageBodyTextWithImageItemTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>
  text?: Maybe<PrismicStructuredTextTypeFilterInput>
  button_text?: Maybe<PrismicStructuredTextTypeFilterInput>
  button_link?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicPageBodyTextWithImageItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicPageBodyTextWithImageItemTypeFilterInput>
}

export type PrismicPageBodyTextWithImagePrimaryType = {
  subheading?: Maybe<PrismicStructuredTextType>
  heading?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageBodyTextWithImagePrimaryTypeFilterInput = {
  subheading?: Maybe<PrismicStructuredTextTypeFilterInput>
  heading?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageBodyTextWithImageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyTextWithImageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageBodyTexturedImage = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyTexturedImagePrimaryType>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyTexturedImageConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTexturedImageEdge>
  nodes: Array<PrismicPageBodyTexturedImage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyTexturedImageGroupConnection>
}

export type PrismicPageBodyTexturedImageConnectionDistinctArgs = {
  field: PrismicPageBodyTexturedImageFieldsEnum
}

export type PrismicPageBodyTexturedImageConnectionMaxArgs = {
  field: PrismicPageBodyTexturedImageFieldsEnum
}

export type PrismicPageBodyTexturedImageConnectionMinArgs = {
  field: PrismicPageBodyTexturedImageFieldsEnum
}

export type PrismicPageBodyTexturedImageConnectionSumArgs = {
  field: PrismicPageBodyTexturedImageFieldsEnum
}

export type PrismicPageBodyTexturedImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyTexturedImageFieldsEnum
}

export type PrismicPageBodyTexturedImageEdge = {
  next?: Maybe<PrismicPageBodyTexturedImage>
  node: PrismicPageBodyTexturedImage
  previous?: Maybe<PrismicPageBodyTexturedImage>
}

export enum PrismicPageBodyTexturedImageFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryImageAlt = 'primary___image___alt',
  PrimaryImageCopyright = 'primary___image___copyright',
  PrimaryImageDimensionsWidth = 'primary___image___dimensions___width',
  PrimaryImageDimensionsHeight = 'primary___image___dimensions___height',
  PrimaryImageUrl = 'primary___image___url',
  PrimaryImageFixedBase64 = 'primary___image___fixed___base64',
  PrimaryImageFixedSrc = 'primary___image___fixed___src',
  PrimaryImageFixedSrcSet = 'primary___image___fixed___srcSet',
  PrimaryImageFixedSrcWebp = 'primary___image___fixed___srcWebp',
  PrimaryImageFixedSrcSetWebp = 'primary___image___fixed___srcSetWebp',
  PrimaryImageFixedSizes = 'primary___image___fixed___sizes',
  PrimaryImageFixedWidth = 'primary___image___fixed___width',
  PrimaryImageFixedHeight = 'primary___image___fixed___height',
  PrimaryImageFluidBase64 = 'primary___image___fluid___base64',
  PrimaryImageFluidSrc = 'primary___image___fluid___src',
  PrimaryImageFluidSrcSet = 'primary___image___fluid___srcSet',
  PrimaryImageFluidSrcWebp = 'primary___image___fluid___srcWebp',
  PrimaryImageFluidSrcSetWebp = 'primary___image___fluid___srcSetWebp',
  PrimaryImageFluidSizes = 'primary___image___fluid___sizes',
  PrimaryImageFluidAspectRatio = 'primary___image___fluid___aspectRatio',
  PrimaryImageLocalFileSourceInstanceName = 'primary___image___localFile___sourceInstanceName',
  PrimaryImageLocalFileAbsolutePath = 'primary___image___localFile___absolutePath',
  PrimaryImageLocalFileRelativePath = 'primary___image___localFile___relativePath',
  PrimaryImageLocalFileExtension = 'primary___image___localFile___extension',
  PrimaryImageLocalFileSize = 'primary___image___localFile___size',
  PrimaryImageLocalFilePrettySize = 'primary___image___localFile___prettySize',
  PrimaryImageLocalFileModifiedTime = 'primary___image___localFile___modifiedTime',
  PrimaryImageLocalFileAccessTime = 'primary___image___localFile___accessTime',
  PrimaryImageLocalFileChangeTime = 'primary___image___localFile___changeTime',
  PrimaryImageLocalFileBirthTime = 'primary___image___localFile___birthTime',
  PrimaryImageLocalFileRoot = 'primary___image___localFile___root',
  PrimaryImageLocalFileDir = 'primary___image___localFile___dir',
  PrimaryImageLocalFileBase = 'primary___image___localFile___base',
  PrimaryImageLocalFileExt = 'primary___image___localFile___ext',
  PrimaryImageLocalFileName = 'primary___image___localFile___name',
  PrimaryImageLocalFileRelativeDirectory = 'primary___image___localFile___relativeDirectory',
  PrimaryImageLocalFileDev = 'primary___image___localFile___dev',
  PrimaryImageLocalFileMode = 'primary___image___localFile___mode',
  PrimaryImageLocalFileNlink = 'primary___image___localFile___nlink',
  PrimaryImageLocalFileUid = 'primary___image___localFile___uid',
  PrimaryImageLocalFileGid = 'primary___image___localFile___gid',
  PrimaryImageLocalFileRdev = 'primary___image___localFile___rdev',
  PrimaryImageLocalFileIno = 'primary___image___localFile___ino',
  PrimaryImageLocalFileAtimeMs = 'primary___image___localFile___atimeMs',
  PrimaryImageLocalFileMtimeMs = 'primary___image___localFile___mtimeMs',
  PrimaryImageLocalFileCtimeMs = 'primary___image___localFile___ctimeMs',
  PrimaryImageLocalFileAtime = 'primary___image___localFile___atime',
  PrimaryImageLocalFileMtime = 'primary___image___localFile___mtime',
  PrimaryImageLocalFileCtime = 'primary___image___localFile___ctime',
  PrimaryImageLocalFileBirthtime = 'primary___image___localFile___birthtime',
  PrimaryImageLocalFileBirthtimeMs = 'primary___image___localFile___birthtimeMs',
  PrimaryImageLocalFileId = 'primary___image___localFile___id',
  PrimaryImageLocalFileChildren = 'primary___image___localFile___children',
  PrimaryImageThumbnails = 'primary___image___thumbnails',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyTexturedImageFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTexturedImagePrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyTexturedImageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTexturedImageEdge>
  nodes: Array<PrismicPageBodyTexturedImage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyTexturedImagePrimaryType = {
  image?: Maybe<PrismicImageType>
}

export type PrismicPageBodyTexturedImagePrimaryTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>
}

export type PrismicPageBodyTexturedImageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyTexturedImageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageBodyTwoColumnText = PrismicSliceType &
  Node & {
    slice_type: Scalars['String']
    slice_label?: Maybe<Scalars['String']>
    primary?: Maybe<PrismicPageBodyTwoColumnTextPrimaryType>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPageBodyTwoColumnTextConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTwoColumnTextEdge>
  nodes: Array<PrismicPageBodyTwoColumnText>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageBodyTwoColumnTextGroupConnection>
}

export type PrismicPageBodyTwoColumnTextConnectionDistinctArgs = {
  field: PrismicPageBodyTwoColumnTextFieldsEnum
}

export type PrismicPageBodyTwoColumnTextConnectionMaxArgs = {
  field: PrismicPageBodyTwoColumnTextFieldsEnum
}

export type PrismicPageBodyTwoColumnTextConnectionMinArgs = {
  field: PrismicPageBodyTwoColumnTextFieldsEnum
}

export type PrismicPageBodyTwoColumnTextConnectionSumArgs = {
  field: PrismicPageBodyTwoColumnTextFieldsEnum
}

export type PrismicPageBodyTwoColumnTextConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageBodyTwoColumnTextFieldsEnum
}

export type PrismicPageBodyTwoColumnTextEdge = {
  next?: Maybe<PrismicPageBodyTwoColumnText>
  node: PrismicPageBodyTwoColumnText
  previous?: Maybe<PrismicPageBodyTwoColumnText>
}

export enum PrismicPageBodyTwoColumnTextFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryRightTextHtml = 'primary___right_text___html',
  PrimaryRightTextText = 'primary___right_text___text',
  PrimaryRightTextRaw = 'primary___right_text___raw',
  PrimaryLeftTextHtml = 'primary___left_text___html',
  PrimaryLeftTextText = 'primary___left_text___text',
  PrimaryLeftTextRaw = 'primary___left_text___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageBodyTwoColumnTextFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTwoColumnTextPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageBodyTwoColumnTextGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageBodyTwoColumnTextEdge>
  nodes: Array<PrismicPageBodyTwoColumnText>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageBodyTwoColumnTextPrimaryType = {
  right_text?: Maybe<PrismicStructuredTextType>
  left_text?: Maybe<PrismicStructuredTextType>
}

export type PrismicPageBodyTwoColumnTextPrimaryTypeFilterInput = {
  right_text?: Maybe<PrismicStructuredTextTypeFilterInput>
  left_text?: Maybe<PrismicStructuredTextTypeFilterInput>
}

export type PrismicPageBodyTwoColumnTextSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageBodyTwoColumnTextFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPageConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageEdge>
  nodes: Array<PrismicPage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPageGroupConnection>
}

export type PrismicPageConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionMaxArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionMinArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionSumArgs = {
  field: PrismicPageFieldsEnum
}

export type PrismicPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPageFieldsEnum
}

export type PrismicPageDataType = {
  title?: Maybe<PrismicStructuredTextType>
  meta_title?: Maybe<Scalars['String']>
  meta_description?: Maybe<Scalars['String']>
  parent?: Maybe<PrismicLinkType>
  redirect_to?: Maybe<PrismicLinkType>
  redirect_is_permanent?: Maybe<Scalars['Boolean']>
  body?: Maybe<Array<Maybe<PrismicPageBodySlicesType>>>
}

export type PrismicPageDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
  meta_title?: Maybe<StringQueryOperatorInput>
  meta_description?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<PrismicLinkTypeFilterInput>
  redirect_to?: Maybe<PrismicLinkTypeFilterInput>
  redirect_is_permanent?: Maybe<BooleanQueryOperatorInput>
}

export type PrismicPageEdge = {
  next?: Maybe<PrismicPage>
  node: PrismicPage
  previous?: Maybe<PrismicPage>
}

export enum PrismicPageFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataMetaTitle = 'data___meta_title',
  DataMetaDescription = 'data___meta_description',
  DataParentLinkType = 'data___parent___link_type',
  DataParentIsBroken = 'data___parent___isBroken',
  DataParentUrl = 'data___parent___url',
  DataParentTarget = 'data___parent___target',
  DataParentSize = 'data___parent___size',
  DataParentId = 'data___parent___id',
  DataParentType = 'data___parent___type',
  DataParentTags = 'data___parent___tags',
  DataParentLang = 'data___parent___lang',
  DataParentSlug = 'data___parent___slug',
  DataParentUid = 'data___parent___uid',
  DataParentRaw = 'data___parent___raw',
  DataRedirectToLinkType = 'data___redirect_to___link_type',
  DataRedirectToIsBroken = 'data___redirect_to___isBroken',
  DataRedirectToUrl = 'data___redirect_to___url',
  DataRedirectToTarget = 'data___redirect_to___target',
  DataRedirectToSize = 'data___redirect_to___size',
  DataRedirectToId = 'data___redirect_to___id',
  DataRedirectToType = 'data___redirect_to___type',
  DataRedirectToTags = 'data___redirect_to___tags',
  DataRedirectToLang = 'data___redirect_to___lang',
  DataRedirectToSlug = 'data___redirect_to___slug',
  DataRedirectToUid = 'data___redirect_to___uid',
  DataRedirectToRaw = 'data___redirect_to___raw',
  DataRedirectIsPermanent = 'data___redirect_is_permanent',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageFilterInput = {
  data?: Maybe<PrismicPageDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPageEdge>
  nodes: Array<PrismicPage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicPerson = PrismicDocument &
  Node & {
    data?: Maybe<PrismicPersonDataType>
    dataRaw: Scalars['JSON']
    dataString: Scalars['String']
    first_publication_date: Scalars['Date']
    href: Scalars['String']
    url?: Maybe<Scalars['String']>
    lang: Scalars['String']
    last_publication_date: Scalars['Date']
    tags: Array<Scalars['String']>
    alternate_languages: Array<PrismicLinkType>
    type: Scalars['String']
    prismicId: Scalars['ID']
    _previewable: Scalars['ID']
    uid?: Maybe<Scalars['String']>
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicPersonFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicPersonLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicPersonConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPersonEdge>
  nodes: Array<PrismicPerson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicPersonGroupConnection>
}

export type PrismicPersonConnectionDistinctArgs = {
  field: PrismicPersonFieldsEnum
}

export type PrismicPersonConnectionMaxArgs = {
  field: PrismicPersonFieldsEnum
}

export type PrismicPersonConnectionMinArgs = {
  field: PrismicPersonFieldsEnum
}

export type PrismicPersonConnectionSumArgs = {
  field: PrismicPersonFieldsEnum
}

export type PrismicPersonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicPersonFieldsEnum
}

export type PrismicPersonDataType = {
  first_name?: Maybe<PrismicStructuredTextType>
  last_name?: Maybe<PrismicStructuredTextType>
  title?: Maybe<PrismicStructuredTextType>
  position_type?: Maybe<Scalars['String']>
  bio?: Maybe<PrismicStructuredTextType>
  headshot?: Maybe<PrismicImageType>
}

export type PrismicPersonDataTypeFilterInput = {
  first_name?: Maybe<PrismicStructuredTextTypeFilterInput>
  last_name?: Maybe<PrismicStructuredTextTypeFilterInput>
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
  position_type?: Maybe<StringQueryOperatorInput>
  bio?: Maybe<PrismicStructuredTextTypeFilterInput>
  headshot?: Maybe<PrismicImageTypeFilterInput>
}

export type PrismicPersonEdge = {
  next?: Maybe<PrismicPerson>
  node: PrismicPerson
  previous?: Maybe<PrismicPerson>
}

export enum PrismicPersonFieldsEnum {
  DataFirstNameHtml = 'data___first_name___html',
  DataFirstNameText = 'data___first_name___text',
  DataFirstNameRaw = 'data___first_name___raw',
  DataLastNameHtml = 'data___last_name___html',
  DataLastNameText = 'data___last_name___text',
  DataLastNameRaw = 'data___last_name___raw',
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataPositionType = 'data___position_type',
  DataBioHtml = 'data___bio___html',
  DataBioText = 'data___bio___text',
  DataBioRaw = 'data___bio___raw',
  DataHeadshotAlt = 'data___headshot___alt',
  DataHeadshotCopyright = 'data___headshot___copyright',
  DataHeadshotDimensionsWidth = 'data___headshot___dimensions___width',
  DataHeadshotDimensionsHeight = 'data___headshot___dimensions___height',
  DataHeadshotUrl = 'data___headshot___url',
  DataHeadshotFixedBase64 = 'data___headshot___fixed___base64',
  DataHeadshotFixedSrc = 'data___headshot___fixed___src',
  DataHeadshotFixedSrcSet = 'data___headshot___fixed___srcSet',
  DataHeadshotFixedSrcWebp = 'data___headshot___fixed___srcWebp',
  DataHeadshotFixedSrcSetWebp = 'data___headshot___fixed___srcSetWebp',
  DataHeadshotFixedSizes = 'data___headshot___fixed___sizes',
  DataHeadshotFixedWidth = 'data___headshot___fixed___width',
  DataHeadshotFixedHeight = 'data___headshot___fixed___height',
  DataHeadshotFluidBase64 = 'data___headshot___fluid___base64',
  DataHeadshotFluidSrc = 'data___headshot___fluid___src',
  DataHeadshotFluidSrcSet = 'data___headshot___fluid___srcSet',
  DataHeadshotFluidSrcWebp = 'data___headshot___fluid___srcWebp',
  DataHeadshotFluidSrcSetWebp = 'data___headshot___fluid___srcSetWebp',
  DataHeadshotFluidSizes = 'data___headshot___fluid___sizes',
  DataHeadshotFluidAspectRatio = 'data___headshot___fluid___aspectRatio',
  DataHeadshotLocalFileSourceInstanceName = 'data___headshot___localFile___sourceInstanceName',
  DataHeadshotLocalFileAbsolutePath = 'data___headshot___localFile___absolutePath',
  DataHeadshotLocalFileRelativePath = 'data___headshot___localFile___relativePath',
  DataHeadshotLocalFileExtension = 'data___headshot___localFile___extension',
  DataHeadshotLocalFileSize = 'data___headshot___localFile___size',
  DataHeadshotLocalFilePrettySize = 'data___headshot___localFile___prettySize',
  DataHeadshotLocalFileModifiedTime = 'data___headshot___localFile___modifiedTime',
  DataHeadshotLocalFileAccessTime = 'data___headshot___localFile___accessTime',
  DataHeadshotLocalFileChangeTime = 'data___headshot___localFile___changeTime',
  DataHeadshotLocalFileBirthTime = 'data___headshot___localFile___birthTime',
  DataHeadshotLocalFileRoot = 'data___headshot___localFile___root',
  DataHeadshotLocalFileDir = 'data___headshot___localFile___dir',
  DataHeadshotLocalFileBase = 'data___headshot___localFile___base',
  DataHeadshotLocalFileExt = 'data___headshot___localFile___ext',
  DataHeadshotLocalFileName = 'data___headshot___localFile___name',
  DataHeadshotLocalFileRelativeDirectory = 'data___headshot___localFile___relativeDirectory',
  DataHeadshotLocalFileDev = 'data___headshot___localFile___dev',
  DataHeadshotLocalFileMode = 'data___headshot___localFile___mode',
  DataHeadshotLocalFileNlink = 'data___headshot___localFile___nlink',
  DataHeadshotLocalFileUid = 'data___headshot___localFile___uid',
  DataHeadshotLocalFileGid = 'data___headshot___localFile___gid',
  DataHeadshotLocalFileRdev = 'data___headshot___localFile___rdev',
  DataHeadshotLocalFileIno = 'data___headshot___localFile___ino',
  DataHeadshotLocalFileAtimeMs = 'data___headshot___localFile___atimeMs',
  DataHeadshotLocalFileMtimeMs = 'data___headshot___localFile___mtimeMs',
  DataHeadshotLocalFileCtimeMs = 'data___headshot___localFile___ctimeMs',
  DataHeadshotLocalFileAtime = 'data___headshot___localFile___atime',
  DataHeadshotLocalFileMtime = 'data___headshot___localFile___mtime',
  DataHeadshotLocalFileCtime = 'data___headshot___localFile___ctime',
  DataHeadshotLocalFileBirthtime = 'data___headshot___localFile___birthtime',
  DataHeadshotLocalFileBirthtimeMs = 'data___headshot___localFile___birthtimeMs',
  DataHeadshotLocalFileId = 'data___headshot___localFile___id',
  DataHeadshotLocalFileChildren = 'data___headshot___localFile___children',
  DataHeadshotThumbnails = 'data___headshot___thumbnails',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPersonFilterInput = {
  data?: Maybe<PrismicPersonDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicPersonGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicPersonEdge>
  nodes: Array<PrismicPerson>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicPersonSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPersonFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSettings = PrismicDocument &
  Node & {
    data?: Maybe<PrismicSettingsDataType>
    dataRaw: Scalars['JSON']
    dataString: Scalars['String']
    first_publication_date: Scalars['Date']
    href: Scalars['String']
    url?: Maybe<Scalars['String']>
    lang: Scalars['String']
    last_publication_date: Scalars['Date']
    tags: Array<Scalars['String']>
    alternate_languages: Array<PrismicLinkType>
    type: Scalars['String']
    prismicId: Scalars['ID']
    _previewable: Scalars['ID']
    id: Scalars['ID']
    parent?: Maybe<Node>
    children: Array<Node>
    internal: Internal
  }

export type PrismicSettingsFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicSettingsLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type PrismicSettingsConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicSettingsEdge>
  nodes: Array<PrismicSettings>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PrismicSettingsGroupConnection>
}

export type PrismicSettingsConnectionDistinctArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionMaxArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionMinArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionSumArgs = {
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: PrismicSettingsFieldsEnum
}

export type PrismicSettingsDataType = {
  title?: Maybe<PrismicStructuredTextType>
  site_name?: Maybe<PrismicStructuredTextType>
  site_description?: Maybe<PrismicStructuredTextType>
  site_copyright?: Maybe<PrismicStructuredTextType>
  facebook_handle?: Maybe<PrismicStructuredTextType>
  twitter_handle?: Maybe<PrismicStructuredTextType>
  instagram_handle?: Maybe<PrismicStructuredTextType>
  redirects?: Maybe<Array<Maybe<PrismicSettingsRedirectsGroupType>>>
  preview_map?: Maybe<Array<Maybe<PrismicSettingsPreviewMapGroupType>>>
}

export type PrismicSettingsDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>
  site_name?: Maybe<PrismicStructuredTextTypeFilterInput>
  site_description?: Maybe<PrismicStructuredTextTypeFilterInput>
  site_copyright?: Maybe<PrismicStructuredTextTypeFilterInput>
  facebook_handle?: Maybe<PrismicStructuredTextTypeFilterInput>
  twitter_handle?: Maybe<PrismicStructuredTextTypeFilterInput>
  instagram_handle?: Maybe<PrismicStructuredTextTypeFilterInput>
  redirects?: Maybe<PrismicSettingsRedirectsGroupTypeFilterListInput>
  preview_map?: Maybe<PrismicSettingsPreviewMapGroupTypeFilterListInput>
}

export type PrismicSettingsEdge = {
  next?: Maybe<PrismicSettings>
  node: PrismicSettings
  previous?: Maybe<PrismicSettings>
}

export enum PrismicSettingsFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataSiteNameHtml = 'data___site_name___html',
  DataSiteNameText = 'data___site_name___text',
  DataSiteNameRaw = 'data___site_name___raw',
  DataSiteDescriptionHtml = 'data___site_description___html',
  DataSiteDescriptionText = 'data___site_description___text',
  DataSiteDescriptionRaw = 'data___site_description___raw',
  DataSiteCopyrightHtml = 'data___site_copyright___html',
  DataSiteCopyrightText = 'data___site_copyright___text',
  DataSiteCopyrightRaw = 'data___site_copyright___raw',
  DataFacebookHandleHtml = 'data___facebook_handle___html',
  DataFacebookHandleText = 'data___facebook_handle___text',
  DataFacebookHandleRaw = 'data___facebook_handle___raw',
  DataTwitterHandleHtml = 'data___twitter_handle___html',
  DataTwitterHandleText = 'data___twitter_handle___text',
  DataTwitterHandleRaw = 'data___twitter_handle___raw',
  DataInstagramHandleHtml = 'data___instagram_handle___html',
  DataInstagramHandleText = 'data___instagram_handle___text',
  DataInstagramHandleRaw = 'data___instagram_handle___raw',
  DataRedirects = 'data___redirects',
  DataRedirectsFromPath = 'data___redirects___from_path',
  DataRedirectsToPath = 'data___redirects___to_path',
  DataRedirectsIsPermanent = 'data___redirects___is_permanent',
  DataPreviewMap = 'data___preview_map',
  DataPreviewMapApiId = 'data___preview_map___api_id',
  DataPreviewMapPageLinkType = 'data___preview_map___page___link_type',
  DataPreviewMapPageIsBroken = 'data___preview_map___page___isBroken',
  DataPreviewMapPageUrl = 'data___preview_map___page___url',
  DataPreviewMapPageTarget = 'data___preview_map___page___target',
  DataPreviewMapPageSize = 'data___preview_map___page___size',
  DataPreviewMapPageId = 'data___preview_map___page___id',
  DataPreviewMapPageType = 'data___preview_map___page___type',
  DataPreviewMapPageTags = 'data___preview_map___page___tags',
  DataPreviewMapPageLang = 'data___preview_map___page___lang',
  DataPreviewMapPageSlug = 'data___preview_map___page___slug',
  DataPreviewMapPageUid = 'data___preview_map___page___uid',
  DataPreviewMapPageRaw = 'data___preview_map___page___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicSettingsFilterInput = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PrismicSettingsGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PrismicSettingsEdge>
  nodes: Array<PrismicSettings>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PrismicSettingsPreviewMapGroupType = {
  api_id?: Maybe<Scalars['String']>
  page?: Maybe<PrismicLinkType>
}

export type PrismicSettingsPreviewMapGroupTypeFilterInput = {
  api_id?: Maybe<StringQueryOperatorInput>
  page?: Maybe<PrismicLinkTypeFilterInput>
}

export type PrismicSettingsPreviewMapGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsPreviewMapGroupTypeFilterInput>
}

export type PrismicSettingsRedirectsGroupType = {
  from_path?: Maybe<Scalars['String']>
  to_path?: Maybe<Scalars['String']>
  is_permanent?: Maybe<Scalars['Boolean']>
}

export type PrismicSettingsRedirectsGroupTypeFilterInput = {
  from_path?: Maybe<StringQueryOperatorInput>
  to_path?: Maybe<StringQueryOperatorInput>
  is_permanent?: Maybe<BooleanQueryOperatorInput>
}

export type PrismicSettingsRedirectsGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicSettingsRedirectsGroupTypeFilterInput>
}

export type PrismicSettingsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicSettingsFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type PrismicSliceType = {
  /** The slice type API ID. */
  slice_type: Scalars['String']
  /** The slice label. */
  slice_label?: Maybe<Scalars['String']>
}

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>
}

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>
  text?: Maybe<StringQueryOperatorInput>
  raw?: Maybe<JsonQueryOperatorInput>
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  siteFunction?: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  prismicPageBodyTexturedImage?: Maybe<PrismicPageBodyTexturedImage>
  allPrismicPageBodyTexturedImage: PrismicPageBodyTexturedImageConnection
  prismicPageBodyPageIntro?: Maybe<PrismicPageBodyPageIntro>
  allPrismicPageBodyPageIntro: PrismicPageBodyPageIntroConnection
  prismicPageBodyCenteredText?: Maybe<PrismicPageBodyCenteredText>
  allPrismicPageBodyCenteredText: PrismicPageBodyCenteredTextConnection
  prismicPageBodyTwoColumnText?: Maybe<PrismicPageBodyTwoColumnText>
  allPrismicPageBodyTwoColumnText: PrismicPageBodyTwoColumnTextConnection
  prismicPageBodyTextWithImage?: Maybe<PrismicPageBodyTextWithImage>
  allPrismicPageBodyTextWithImage: PrismicPageBodyTextWithImageConnection
  prismicPageBodyTeam?: Maybe<PrismicPageBodyTeam>
  allPrismicPageBodyTeam: PrismicPageBodyTeamConnection
  prismicPageBodyCallToAction?: Maybe<PrismicPageBodyCallToAction>
  allPrismicPageBodyCallToAction: PrismicPageBodyCallToActionConnection
  prismicPageBodyAnchor?: Maybe<PrismicPageBodyAnchor>
  allPrismicPageBodyAnchor: PrismicPageBodyAnchorConnection
  prismicPage?: Maybe<PrismicPage>
  allPrismicPage: PrismicPageConnection
  prismicNavigation?: Maybe<PrismicNavigation>
  allPrismicNavigation: PrismicNavigationConnection
  prismicPerson?: Maybe<PrismicPerson>
  allPrismicPerson: PrismicPersonConnection
  prismicSettings?: Maybe<PrismicSettings>
  allPrismicSettings: PrismicSettingsConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteFunctionArgs = {
  apiRoute?: Maybe<StringQueryOperatorInput>
  originalFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  sort?: Maybe<SiteFunctionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyTexturedImageArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTexturedImagePrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyTexturedImageArgs = {
  filter?: Maybe<PrismicPageBodyTexturedImageFilterInput>
  sort?: Maybe<PrismicPageBodyTexturedImageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyPageIntroArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyPageIntroPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyPageIntroArgs = {
  filter?: Maybe<PrismicPageBodyPageIntroFilterInput>
  sort?: Maybe<PrismicPageBodyPageIntroSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyCenteredTextArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyCenteredTextPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyCenteredTextArgs = {
  filter?: Maybe<PrismicPageBodyCenteredTextFilterInput>
  sort?: Maybe<PrismicPageBodyCenteredTextSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyTwoColumnTextArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTwoColumnTextPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyTwoColumnTextArgs = {
  filter?: Maybe<PrismicPageBodyTwoColumnTextFilterInput>
  sort?: Maybe<PrismicPageBodyTwoColumnTextSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyTextWithImageArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTextWithImagePrimaryTypeFilterInput>
  items?: Maybe<PrismicPageBodyTextWithImageItemTypeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyTextWithImageArgs = {
  filter?: Maybe<PrismicPageBodyTextWithImageFilterInput>
  sort?: Maybe<PrismicPageBodyTextWithImageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyTeamArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyTeamPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyTeamArgs = {
  filter?: Maybe<PrismicPageBodyTeamFilterInput>
  sort?: Maybe<PrismicPageBodyTeamSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyCallToActionArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyCallToActionPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyCallToActionArgs = {
  filter?: Maybe<PrismicPageBodyCallToActionFilterInput>
  sort?: Maybe<PrismicPageBodyCallToActionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageBodyAnchorArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>
  slice_label?: Maybe<StringQueryOperatorInput>
  primary?: Maybe<PrismicPageBodyAnchorPrimaryTypeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageBodyAnchorArgs = {
  filter?: Maybe<PrismicPageBodyAnchorFilterInput>
  sort?: Maybe<PrismicPageBodyAnchorSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPageArgs = {
  data?: Maybe<PrismicPageDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPageArgs = {
  filter?: Maybe<PrismicPageFilterInput>
  sort?: Maybe<PrismicPageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicNavigationArgs = {
  data?: Maybe<PrismicNavigationDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicNavigationArgs = {
  filter?: Maybe<PrismicNavigationFilterInput>
  sort?: Maybe<PrismicNavigationSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicPersonArgs = {
  data?: Maybe<PrismicPersonDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  uid?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicPersonArgs = {
  filter?: Maybe<PrismicPersonFilterInput>
  sort?: Maybe<PrismicPersonSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPrismicSettingsArgs = {
  data?: Maybe<PrismicSettingsDataTypeFilterInput>
  dataRaw?: Maybe<JsonQueryOperatorInput>
  dataString?: Maybe<StringQueryOperatorInput>
  first_publication_date?: Maybe<DateQueryOperatorInput>
  href?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
  lang?: Maybe<StringQueryOperatorInput>
  last_publication_date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>
  type?: Maybe<StringQueryOperatorInput>
  prismicId?: Maybe<IdQueryOperatorInput>
  _previewable?: Maybe<IdQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllPrismicSettingsArgs = {
  filter?: Maybe<PrismicSettingsFilterInput>
  sort?: Maybe<PrismicSettingsSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitleShort = 'siteMetadata___titleShort',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunction = Node & {
  apiRoute: Scalars['String']
  originalFilePath: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
  absoluteCompiledFilePath: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteFunctionConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  ApiRoute = 'apiRoute',
  OriginalFilePath = 'originalFilePath',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFunctionFilterInput = {
  apiRoute?: Maybe<StringQueryOperatorInput>
  originalFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  uid?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  uid?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextUid = 'context___uid',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  PluginCreatorPluginOptionsEntryLimit = 'pluginCreator___pluginOptions___entryLimit',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsRepositoryName = 'pluginCreator___pluginOptions___repositoryName',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsFetchLinks = 'pluginCreator___pluginOptions___fetchLinks',
  PluginCreatorPluginOptionsPrismicToolbar = 'pluginCreator___pluginOptions___prismicToolbar',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsEntryLimit = 'pluginOptions___entryLimit',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsFetchLinks = 'pluginOptions___fetchLinks',
  PluginOptionsPrismicToolbar = 'pluginOptions___prismicToolbar',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  output?: Maybe<Scalars['String']>
  createLinkInHead?: Maybe<Scalars['Boolean']>
  entryLimit?: Maybe<Scalars['Int']>
  query?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
  allExtensions?: Maybe<Scalars['Boolean']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
  repositoryName?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  schemas?: Maybe<SitePluginPluginOptionsSchemas>
  fetchLinks?: Maybe<Array<Maybe<Scalars['String']>>>
  prismicToolbar?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFilterInput = {
  output?: Maybe<StringQueryOperatorInput>
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>
  entryLimit?: Maybe<IntQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  repositoryName?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>
  fetchLinks?: Maybe<StringQueryOperatorInput>
  prismicToolbar?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemas = {
  page?: Maybe<SitePluginPluginOptionsSchemasPage>
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigation>
  person?: Maybe<SitePluginPluginOptionsSchemasPerson>
  settings?: Maybe<SitePluginPluginOptionsSchemasSettings>
}

export type SitePluginPluginOptionsSchemasFilterInput = {
  page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>
  navigation?: Maybe<SitePluginPluginOptionsSchemasNavigationFilterInput>
  person?: Maybe<SitePluginPluginOptionsSchemasPersonFilterInput>
  settings?: Maybe<SitePluginPluginOptionsSchemasSettingsFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigation = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMain>
}

export type SitePluginPluginOptionsSchemasNavigationFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasNavigationMainFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUid>
  nav_items?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_Items>
}

export type SitePluginPluginOptionsSchemasNavigationMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidFilterInput>
  nav_items?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_Items = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFields>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFields =
  {
    label?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabel>
    link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLink>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsFilterInput =
  {
    label?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelFilterInput>
    link?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabel =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfig>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLabelConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLink =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfig>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfig =
  {
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfigFilterInput =
  {
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsLinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainNav_ItemsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainNav_ItemsConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasNavigationMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfig>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasNavigationMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasNavigationMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPage = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBody>
}

export type SitePluginPluginOptionsSchemasPageBody = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBody>
}

export type SitePluginPluginOptionsSchemasPageBodyBody = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfig>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfig = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoices = {
  textured_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_Image>
  page_intro?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_Intro>
  centered_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_Text>
  two_column_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_Text>
  text_with_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_Image>
  team?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeam>
  call_to_action?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_Action>
  anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchor = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_Repeat =
  {
    anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchor>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchor =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfig =
  {
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatFilterInput =
  {
    anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorNon_RepeatAnchorFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_Action =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_Repeat =
  {
    subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheading>
    heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeading>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatText>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatFilterInput =
  {
    subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheadingFilterInput>
    heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeadingFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatTextFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatHeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatSubheadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionNon_RepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_Text =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_Repeat =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatText>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatFilterInput =
  {
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatTextFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextNon_RepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput =
  {
    textured_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageFilterInput>
    page_intro?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroFilterInput>
    centered_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCentered_TextFilterInput>
    two_column_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextFilterInput>
    text_with_image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageFilterInput>
    team?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamFilterInput>
    call_to_action?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesCall_To_ActionFilterInput>
    anchor?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesAnchorFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_Intro =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_Repeat =
  {
    heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeading>
    navigation?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigation>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatFilterInput =
  {
    heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeadingFilterInput>
    navigation?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigationFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatHeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigation =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigationConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigationConfig =
  {
    select?: Maybe<Scalars['String']>
    customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigationConfigFilterInput =
  {
    select?: Maybe<StringQueryOperatorInput>
    customtypes?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigationFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesPage_IntroNon_RepeatNavigationConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeam = {
  type?: Maybe<Scalars['String']>
  fieldset?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_Repeat>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_Repeat =
  {
    directors_subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_Subheading>
    directors_heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_Heading>
    staff_team_heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_Heading>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_Heading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_HeadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_HeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_HeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_HeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_HeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_Subheading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_SubheadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_SubheadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_SubheadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_SubheadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_SubheadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatFilterInput =
  {
    directors_subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_SubheadingFilterInput>
    directors_heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatDirectors_HeadingFilterInput>
    staff_team_heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_HeadingFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_Heading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_HeadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_HeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_HeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_HeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTeamNon_RepeatStaff_Team_HeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_Image =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_Repeat>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatFilterInput>
    repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_Repeat =
  {
    subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheading>
    heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeading>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatFilterInput =
  {
    subheading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheadingFilterInput>
    heading?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeadingFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatHeadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheading =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheadingConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheadingConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheadingConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheadingFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageNon_RepeatSubheadingConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeat =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImage>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatText>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_Text>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_Link>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_Link =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_LinkConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_LinkConfig =
  {
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_LinkConfigFilterInput =
  {
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_LinkFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_LinkConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_TextConfig =
  {
    single?: Maybe<Scalars['String']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_TextConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatFilterInput =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImageFilterInput>
    text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatTextFilterInput>
    button_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_TextFilterInput>
    button_link?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatButton_LinkFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImageConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatText =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatTextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatTextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatTextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatTextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesText_With_ImageRepeatTextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_Image =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_Repeat =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImage>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatFilterInput =
  {
    image?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImageFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImageConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTextured_ImageNon_RepeatImageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_Text =
  {
    type?: Maybe<Scalars['String']>
    fieldset?: Maybe<Scalars['String']>
    description?: Maybe<Scalars['String']>
    icon?: Maybe<Scalars['String']>
    display?: Maybe<Scalars['String']>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_Repeat>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    fieldset?: Maybe<StringQueryOperatorInput>
    description?: Maybe<StringQueryOperatorInput>
    icon?: Maybe<StringQueryOperatorInput>
    display?: Maybe<StringQueryOperatorInput>
    non_repeat?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_Repeat =
  {
    right_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_Text>
    left_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_Text>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatFilterInput =
  {
    right_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextFilterInput>
    left_text?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatLeft_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_Text =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfig>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfig =
  {
    multi?: Maybe<Scalars['String']>
    allowTargetBlank?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfigFilterInput =
  {
    multi?: Maybe<StringQueryOperatorInput>
    allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesTwo_Column_TextNon_RepeatRight_TextConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigChoicesFilterInput>
}

export type SitePluginPluginOptionsSchemasPageBodyBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  fieldset?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageBodyFilterInput = {
  body?: Maybe<SitePluginPluginOptionsSchemasPageBodyBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasPageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>
  Body?: Maybe<SitePluginPluginOptionsSchemasPageBodyFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitle>
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Title>
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_Description>
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParent>
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_To>
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent>
}

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>
  meta_title?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput>
  meta_description?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput>
  parent?: Maybe<SitePluginPluginOptionsSchemasPageMainParentFilterInput>
  redirect_to?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput>
  redirect_is_permanent?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_Description = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainMeta_DescriptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_DescriptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageMainMeta_Title = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainMeta_TitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainMeta_TitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainParent = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfig>
}

export type SitePluginPluginOptionsSchemasPageMainParentConfig = {
  select?: Maybe<Scalars['String']>
  customtypes?: Maybe<Array<Maybe<Scalars['String']>>>
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput = {
  select?: Maybe<StringQueryOperatorInput>
  customtypes?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
  placeholder?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainParentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainParentConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_Permanent = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfig =
  {
    placeholder_false?: Maybe<Scalars['String']>
    placeholder_true?: Maybe<Scalars['String']>
    default_value?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
    placeholder?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput =
  {
    placeholder_false?: Maybe<StringQueryOperatorInput>
    placeholder_true?: Maybe<StringQueryOperatorInput>
    default_value?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_Is_PermanentConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_To = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfig = {
  label?: Maybe<Scalars['String']>
  placeholder?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
    placeholder?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPageMainRedirect_ToFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainRedirect_ToConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPageMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPerson = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPersonMain>
}

export type SitePluginPluginOptionsSchemasPersonFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPersonMainFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMain = {
  first_name?: Maybe<SitePluginPluginOptionsSchemasPersonMainFirst_Name>
  last_name?: Maybe<SitePluginPluginOptionsSchemasPersonMainLast_Name>
  uid?: Maybe<SitePluginPluginOptionsSchemasPersonMainUid>
  title?: Maybe<SitePluginPluginOptionsSchemasPersonMainTitle>
  position_type?: Maybe<SitePluginPluginOptionsSchemasPersonMainPosition_Type>
  bio?: Maybe<SitePluginPluginOptionsSchemasPersonMainBio>
  headshot?: Maybe<SitePluginPluginOptionsSchemasPersonMainHeadshot>
}

export type SitePluginPluginOptionsSchemasPersonMainBio = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainBioConfig>
}

export type SitePluginPluginOptionsSchemasPersonMainBioConfig = {
  multi?: Maybe<Scalars['String']>
  allowTargetBlank?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPersonMainBioConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPersonMainBioFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainBioConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMainFilterInput = {
  first_name?: Maybe<SitePluginPluginOptionsSchemasPersonMainFirst_NameFilterInput>
  last_name?: Maybe<SitePluginPluginOptionsSchemasPersonMainLast_NameFilterInput>
  uid?: Maybe<SitePluginPluginOptionsSchemasPersonMainUidFilterInput>
  title?: Maybe<SitePluginPluginOptionsSchemasPersonMainTitleFilterInput>
  position_type?: Maybe<SitePluginPluginOptionsSchemasPersonMainPosition_TypeFilterInput>
  bio?: Maybe<SitePluginPluginOptionsSchemasPersonMainBioFilterInput>
  headshot?: Maybe<SitePluginPluginOptionsSchemasPersonMainHeadshotFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMainFirst_Name = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainFirst_NameConfig>
}

export type SitePluginPluginOptionsSchemasPersonMainFirst_NameConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPersonMainFirst_NameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPersonMainFirst_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainFirst_NameConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMainHeadshot = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainHeadshotConfig>
}

export type SitePluginPluginOptionsSchemasPersonMainHeadshotConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPersonMainHeadshotConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPersonMainHeadshotFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainHeadshotConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMainLast_Name = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainLast_NameConfig>
}

export type SitePluginPluginOptionsSchemasPersonMainLast_NameConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPersonMainLast_NameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPersonMainLast_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainLast_NameConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMainPosition_Type = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainPosition_TypeConfig>
}

export type SitePluginPluginOptionsSchemasPersonMainPosition_TypeConfig = {
  options?: Maybe<Array<Maybe<Scalars['String']>>>
  default_value?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPersonMainPosition_TypeConfigFilterInput =
  {
    options?: Maybe<StringQueryOperatorInput>
    default_value?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasPersonMainPosition_TypeFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainPosition_TypeConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasPersonMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPersonMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPersonMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasPersonMainUid = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainUidConfig>
}

export type SitePluginPluginOptionsSchemasPersonMainUidConfig = {
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasPersonMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasPersonMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasPersonMainUidConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettings = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMain>
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirects>
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_Only>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_Only = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput = {
  preview_map?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_Map = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig>
}

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfig =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFields =
  {
    api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id>
    page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_Id =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput =
  {
    api_id?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsApi_IdFilterInput>
    page?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPage =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsPageConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyPreview_MapConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFilterInput>
  Redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput>
  Developer_Only?: Maybe<SitePluginPluginOptionsSchemasSettingsDeveloper_OnlyFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMain = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitle>
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Name>
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Description>
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_Copyright>
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle>
  twitter_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_Handle>
  instagram_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_Handle>
}

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_Handle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput>
  site_name?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput>
  site_description?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput>
  site_copyright?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput>
  facebook_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainFacebook_HandleFilterInput>
  twitter_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleFilterInput>
  instagram_handle?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_Handle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainInstagram_HandleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_Copyright = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_CopyrightConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_Description = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_DescriptionConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_Name = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainSite_NameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainSite_NameConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>
  label?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTitleConfigFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_Handle = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfig>
}

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfig = {
  single?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfigFilterInput =
  {
    single?: Maybe<StringQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsMainTwitter_HandleConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirects = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirects>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsFilterInput = {
  redirects?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirects = {
  type?: Maybe<Scalars['String']>
  config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfig = {
  fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields>
  label?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFields =
  {
    from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path>
    to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path>
    is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput =
  {
    from_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput>
    to_path?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput>
    is_permanent?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_Path =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFrom_PathConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_Permanent =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfig =
  {
    placeholder_false?: Maybe<Scalars['String']>
    placeholder_true?: Maybe<Scalars['String']>
    default_value?: Maybe<Scalars['Boolean']>
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput =
  {
    placeholder_false?: Maybe<StringQueryOperatorInput>
    placeholder_true?: Maybe<StringQueryOperatorInput>
    default_value?: Maybe<BooleanQueryOperatorInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsIs_PermanentConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_Path =
  {
    type?: Maybe<Scalars['String']>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfig =
  {
    label?: Maybe<Scalars['String']>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput =
  {
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsTo_PathConfigFilterInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput =
  {
    fields?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFieldsFilterInput>
    label?: Maybe<StringQueryOperatorInput>
  }

export type SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsFilterInput =
  {
    type?: Maybe<StringQueryOperatorInput>
    config?: Maybe<SitePluginPluginOptionsSchemasSettingsRedirectsRedirectsConfigFilterInput>
  }

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  titleShort?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  titleShort?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type GatsbyPrismicImageFixedFragment = Pick<
  PrismicImageFixedType,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyPrismicImageFixed_NoBase64Fragment = Pick<
  PrismicImageFixedType,
  'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyPrismicImageFixed_WithWebpFragment = Pick<
  PrismicImageFixedType,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyPrismicImageFixed_WithWebp_NoBase64Fragment = Pick<
  PrismicImageFixedType,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyPrismicImageFluidFragment = Pick<
  PrismicImageFluidType,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyPrismicImageFluid_NoBase64Fragment = Pick<
  PrismicImageFluidType,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyPrismicImageFluid_WithWebpFragment = Pick<
  PrismicImageFluidType,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyPrismicImageFluid_WithWebp_NoBase64Fragment = Pick<
  PrismicImageFluidType,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type PrismicPageParentRecursiveFragment = {
  data?: Maybe<{
    parent?: Maybe<{
      document?: Maybe<
        {
          data?: Maybe<{
            parent?: Maybe<{
              document?: Maybe<
                {
                  data?: Maybe<{
                    parent?: Maybe<{
                      document?: Maybe<
                        {
                          data?: Maybe<{
                            parent?: Maybe<{
                              document?: Maybe<PrismicPageParentFieldsFragment>
                            }>
                          }>
                        } & PrismicPageParentFieldsFragment
                      >
                    }>
                  }>
                } & PrismicPageParentFieldsFragment
              >
            }>
          }>
        } & PrismicPageParentFieldsFragment
      >
    }>
  }>
} & PrismicPageParentFieldsFragment

export type PrismicPageParentFieldsFragment = Pick<
  PrismicPage,
  'uid' | 'url'
> & { data?: Maybe<{ title?: Maybe<Pick<PrismicStructuredTextType, 'text'>> }> }

export type AllPrismicPersonsQueryVariables = Exact<{ [key: string]: never }>

export type AllPrismicPersonsQuery = {
  allPrismicPerson: {
    nodes: Array<{
      data?: Maybe<
        Pick<PrismicPersonDataType, 'position_type'> & {
          first_name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
          last_name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
          title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
          headshot?: Maybe<{ fluid?: Maybe<GatsbyPrismicImageFluidFragment> }>
          bio?: Maybe<Pick<PrismicStructuredTextType, 'html'>>
        }
      >
    }>
  }
}

export type PrimaryNavigationQueryVariables = Exact<{ [key: string]: never }>

export type PrimaryNavigationQuery = {
  prismicNavigation?: Maybe<{
    data?: Maybe<{
      nav_items?: Maybe<
        Array<
          Maybe<{
            label?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
            link?: Maybe<Pick<PrismicLinkType, 'url'>>
          }>
        >
      >
    }>
  }>
}

export type UseSiteMetadataQueryVariables = Exact<{ [key: string]: never }>

export type UseSiteMetadataQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<
      Pick<SiteSiteMetadata, 'title' | 'titleShort' | 'description' | 'siteUrl'>
    >
  }>
}

export type PrismicSiteSettingsQueryVariables = Exact<{ [key: string]: never }>

export type PrismicSiteSettingsQuery = {
  prismicSettings?: Maybe<{
    data?: Maybe<{
      site_name?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
      site_description?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
      site_copyright?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
      facebook_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
      twitter_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
      instagram_handle?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
    }>
  }>
}

export type NotFoundPageQueryVariables = Exact<{ [key: string]: never }>

export type NotFoundPageQuery = {
  prismicPage?: Maybe<
    Pick<PrismicPage, '_previewable'> & {
      data?: Maybe<
        Pick<PrismicPageDataType, 'meta_title' | 'meta_description'> & {
          title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
          body?: Maybe<
            Array<
              Maybe<
                | ({ __typename: 'PrismicPageBodyTexturedImage' } & Pick<
                    PrismicPageBodyTexturedImage,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTexturedImage_Fragment)
                | ({ __typename: 'PrismicPageBodyPageIntro' } & Pick<
                    PrismicPageBodyPageIntro,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyPageIntro_Fragment)
                | ({ __typename: 'PrismicPageBodyCenteredText' } & Pick<
                    PrismicPageBodyCenteredText,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyCenteredText_Fragment)
                | ({ __typename: 'PrismicPageBodyTwoColumnText' } & Pick<
                    PrismicPageBodyTwoColumnText,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTwoColumnText_Fragment)
                | ({ __typename: 'PrismicPageBodyTextWithImage' } & Pick<
                    PrismicPageBodyTextWithImage,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTextWithImage_Fragment)
                | ({ __typename: 'PrismicPageBodyTeam' } & Pick<
                    PrismicPageBodyTeam,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTeam_Fragment)
                | ({ __typename: 'PrismicPageBodyCallToAction' } & Pick<
                    PrismicPageBodyCallToAction,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyCallToAction_Fragment)
                | ({ __typename: 'PrismicPageBodyAnchor' } & Pick<
                    PrismicPageBodyAnchor,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyAnchor_Fragment)
              >
            >
          >
        }
      >
    }
  >
}

type SlicesPageBody_PrismicPageBodyTexturedImage_Fragment =
  PageBodyTexturedImageFragment

type SlicesPageBody_PrismicPageBodyPageIntro_Fragment =
  PageBodyPageIntroFragment

type SlicesPageBody_PrismicPageBodyCenteredText_Fragment =
  PageBodyCenteredTextFragment

type SlicesPageBody_PrismicPageBodyTwoColumnText_Fragment =
  PageBodyTwoColumnTextFragment

type SlicesPageBody_PrismicPageBodyTextWithImage_Fragment =
  PageBodyTextWithImageFragment

type SlicesPageBody_PrismicPageBodyTeam_Fragment = PageBodyTeamFragment

type SlicesPageBody_PrismicPageBodyCallToAction_Fragment =
  PageBodyCallToActionFragment

type SlicesPageBody_PrismicPageBodyAnchor_Fragment = PageBodyAnchorFragment

export type SlicesPageBodyFragment =
  | SlicesPageBody_PrismicPageBodyTexturedImage_Fragment
  | SlicesPageBody_PrismicPageBodyPageIntro_Fragment
  | SlicesPageBody_PrismicPageBodyCenteredText_Fragment
  | SlicesPageBody_PrismicPageBodyTwoColumnText_Fragment
  | SlicesPageBody_PrismicPageBodyTextWithImage_Fragment
  | SlicesPageBody_PrismicPageBodyTeam_Fragment
  | SlicesPageBody_PrismicPageBodyCallToAction_Fragment
  | SlicesPageBody_PrismicPageBodyAnchor_Fragment

export type PageBodyAnchorFragment = {
  primary?: Maybe<Pick<PrismicPageBodyAnchorPrimaryType, 'anchor'>>
}

export type PageBodyCallToActionFragment = {
  primary?: Maybe<{
    heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
    subheading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
    text?: Maybe<Pick<PrismicStructuredTextType, 'html'>>
  }>
}

export type PageBodyCenteredTextFragment = {
  primary?: Maybe<{ text?: Maybe<Pick<PrismicStructuredTextType, 'html'>> }>
}

export type PageBodyPageIntroFragment = {
  primary?: Maybe<{
    heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
    navigation?: Maybe<{
      document?: Maybe<{
        data?: Maybe<{
          nav_items?: Maybe<
            Array<
              Maybe<{
                label?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
                link?: Maybe<Pick<PrismicLinkType, 'url'>>
              }>
            >
          >
        }>
      }>
    }>
  }>
}

export type PageBodyTeamFragment = {
  primary?: Maybe<{
    directors_subheading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
    directors_heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
    staff_team_heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
  }>
}

export type PageBodyTextWithImageFragment = {
  primary?: Maybe<{
    subheading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
    heading?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
  }>
  items?: Maybe<
    Array<
      Maybe<{
        image?: Maybe<
          Pick<PrismicImageType, 'alt'> & {
            fluid?: Maybe<GatsbyPrismicImageFluidFragment>
          }
        >
        text?: Maybe<Pick<PrismicStructuredTextType, 'html'>>
        button_text?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
        button_link?: Maybe<Pick<PrismicLinkType, 'url'>>
      }>
    >
  >
}

export type PageBodyTexturedImageFragment = {
  primary?: Maybe<{
    image?: Maybe<
      Pick<PrismicImageType, 'alt'> & {
        fluid?: Maybe<GatsbyPrismicImageFluidFragment>
      }
    >
  }>
}

export type PageBodyTwoColumnTextFragment = {
  primary?: Maybe<{
    left_text?: Maybe<Pick<PrismicStructuredTextType, 'html'>>
    right_text?: Maybe<Pick<PrismicStructuredTextType, 'html'>>
  }>
}

export type PageTemplateQueryVariables = Exact<{
  uid: Scalars['String']
}>

export type PageTemplateQuery = {
  prismicPage?: Maybe<
    Pick<PrismicPage, '_previewable'> & {
      data?: Maybe<
        Pick<PrismicPageDataType, 'meta_title' | 'meta_description'> & {
          title?: Maybe<Pick<PrismicStructuredTextType, 'text'>>
          body?: Maybe<
            Array<
              Maybe<
                | ({ __typename: 'PrismicPageBodyTexturedImage' } & Pick<
                    PrismicPageBodyTexturedImage,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTexturedImage_Fragment)
                | ({ __typename: 'PrismicPageBodyPageIntro' } & Pick<
                    PrismicPageBodyPageIntro,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyPageIntro_Fragment)
                | ({ __typename: 'PrismicPageBodyCenteredText' } & Pick<
                    PrismicPageBodyCenteredText,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyCenteredText_Fragment)
                | ({ __typename: 'PrismicPageBodyTwoColumnText' } & Pick<
                    PrismicPageBodyTwoColumnText,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTwoColumnText_Fragment)
                | ({ __typename: 'PrismicPageBodyTextWithImage' } & Pick<
                    PrismicPageBodyTextWithImage,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTextWithImage_Fragment)
                | ({ __typename: 'PrismicPageBodyTeam' } & Pick<
                    PrismicPageBodyTeam,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyTeam_Fragment)
                | ({ __typename: 'PrismicPageBodyCallToAction' } & Pick<
                    PrismicPageBodyCallToAction,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyCallToAction_Fragment)
                | ({ __typename: 'PrismicPageBodyAnchor' } & Pick<
                    PrismicPageBodyAnchor,
                    'id'
                  > &
                    SlicesPageBody_PrismicPageBodyAnchor_Fragment)
              >
            >
          >
        }
      >
    } & PrismicPageParentRecursiveFragment
  >
}
