
import * as React from 'react';

export const NavigationRef = React.createRef();

export function navigate(name, params) {
  // alert(JSON.stringify(name))
  if (NavigationRef.current) {
    NavigationRef.current.navigate(name, params)
  }
}

export function nestedNavigate(root, child, params) {
  if (NavigationRef.current) {
    NavigationRef.current.navigate(root, { screen: child, params: params })
  }
}

export function goBack() {
  if (NavigationRef.current) {
    NavigationRef.current.goBack()
  }
}