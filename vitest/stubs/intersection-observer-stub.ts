import { StubIntersectionObserver } from '@aracna/web'
import { vi } from 'vitest'

vi.stubGlobal('IntersectionObserver', StubIntersectionObserver)
