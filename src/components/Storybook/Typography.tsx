import React from 'react'
import faker from 'faker'

const DEFAULT_SAMPLE_WORDS = faker.lorem.sentence()

type TypographyComponent<TVariants extends string> = React.ComponentType<{
  variant: TVariants
}> & {
  variants: TVariants[]
}

type TypographyProps<TVariants extends string> = {
  component: TypographyComponent<TVariants>
  variantPrefix?: string
  children?: string
}

export const Typography = <TVariants extends string>({
  component: Comp,
  variantPrefix,
  children = DEFAULT_SAMPLE_WORDS,
}: TypographyProps<TVariants>) => {
  return null

  // const variants = variantPrefix
  //   ? Comp.variants.filter((variant) => variant.startsWith(variantPrefix))
  //   : Comp.variants
  // const sortedVariants = variants.sort()

  // return (
  //   <ul
  //     style={{
  //       display: 'grid',
  //       columnGap: '1.25rem',
  //       rowGap: '2rem',
  //       whiteSpace: 'nowrap',
  //       gridTemplateColumns: 'minmax(6rem, auto) 1fr',
  //       alignItems: 'center',
  //     }}
  //   >
  //     {sortedVariants.map((variant) => (
  //       <React.Fragment key={variant}>
  //         <span
  //           style={{
  //             fontFamily: 'system-ui, sans',
  //             color: 'gray',
  //             fontSize: '11px',
  //             marginLeft: '12px',
  //             textAlign: 'right',
  //           }}
  //         >
  //           {variant}
  //         </span>
  //         <Comp variant={variant}>{children}</Comp>
  //       </React.Fragment>
  //     ))}
  //   </ul>
  // )
}
