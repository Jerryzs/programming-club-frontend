import Link from './Link'
import styles from '../scss/components/MobileNavigation.module.scss'

function MobileNavigation ({
  data
}: {
  data: ReadonlyArray<Readonly<{
    name: string
    href: string
    icon: string
  }>>
}): JSX.Element {
  const navs = data

  return (
    <nav
      className={styles.wrapper}
    >
      <ul>
        {
          navs.map((item, index) => {
            return (
              <li
                key={index}
              >
                <Link
                  href={item.href}
                  activeClassName='active'
                >
                  <a
                    className='text-decoration-none'
                  >
                    <img
                      src={item.icon}
                    />

                    {item.name}
                  </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default MobileNavigation
