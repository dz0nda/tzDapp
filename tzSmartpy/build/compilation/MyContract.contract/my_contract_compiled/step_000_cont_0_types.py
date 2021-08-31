import smartpy as sp

tstorage = sp.TRecord(storedValue = sp.TNat).layout("storedValue")
tparameter = sp.TVariant(store = sp.TNat).layout("store")
tglobals = { }
tviews = { }
